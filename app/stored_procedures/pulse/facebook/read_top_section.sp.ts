import { CONTEXT, PERIODS } from "../../../interfaces/common";
import moment from 'moment';
import { DynamoDB } from "aws-sdk";
import { ReadTopSectionResponse } from "../../../interfaces/pulse/facebook";
import { parseResponse } from "../../../helpers/common/parseResults.helper";

function rand(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
}
export const readTopSection = async (ctx:CONTEXT,start:number,period:PERIODS) => {
    let end = moment(start,'X').subtract(8,'days').unix();

    const dynamo:DynamoDB = ctx.dynamodb;

    let metrics = await dynamo.query({
        TableName: 'FB_PAGE_INSIGHTS',
        IndexName: 'pageidIndex',
        ScanIndexForward: false,
        KeyConditions: {
            'page_id': {
                ComparisonOperator: 'EQ',
                AttributeValueList: [{ 'S': ctx.id }]
            },
            'metric_timestamp': {
                ComparisonOperator: 'BETWEEN',
                AttributeValueList: [
                    { 'N': end.toString() },
                    { 'N': start.toString() }
                ]
            }
        },
        AttributesToGet: [
            'metric_timestamp',
            'system_timestamp',
            'page_fans',
            'page_fans_organic',
            'page_fans_paid',
            'page_impressions',
            'page_impressions_organic',
            'page_impressions_paid',
            'page_impressions_unique',
            'page_impressions_viral',
            'page_content_activity',
            'page_post_engagements',
            'page_reactions_total',
            'page_engaged_users',
            'page_message_count',
            'page_video_views',
            'page_positive_feedback_by_type',
            'page_clics'
        ]
    }).promise();

    let processedMetrics:ReadTopSectionResponse[] = [];
    for(let index in metrics.Items){
        let metric:any = parseResponse(metrics.Items[index],true);
        processedMetrics.push(metric)
    }
    processedMetrics = processedMetrics.filter((elem,index,self)=>{
        let find = self.findIndex(e=>e.metric_timestamp == elem.metric_timestamp);
        if(index == find){
            return elem;
        }
    })

    let response = []
    for(let x = 0; x<processedMetrics.length; x++){
        let metric = processedMetrics[x];
        response.push({
            page_fans: rand(999999),
            total_fans: rand(999999),
            engaged_users: metric.page_engaged_users,
            interactions: metric.page_post_engagements,
            row_date: metric.metric_timestamp,
            fans_page: metric.page_fans,
            organic_fans: metric.page_fans_organic,
            paid_fans: metric.page_fans_organic,
            viral_fans: rand(999999),
            investment: rand(999999),
            total_impressions: metric.page_impressions,
            paid_impressions: metric.page_impressions_paid,
            organic_impressions: metric.page_impressions_organic,
            viral_impressions: metric.page_impressions_viral,
            total_engagement: rand(999999),
            paid_engagement: rand(999999),
            organic_engagement: rand(999999),
            viral_engagement: rand(999999),
            ad_impressions: rand(999999),
            ad_reach: rand(999999),
            ad_interactions: rand(999999),
            ad_frecuency: rand(999999),
            relevance_score: rand(999999),
            ctr: Math.random().toFixed(2),
            cpc: Math.random().toFixed(2),
            stories: metric.page_content_activity,
            post_performance_ratio: ((metric.page_post_engagements / metric.page_impressions_unique) * 100),
            reactions: metric.page_reactions_total.reduce((accumulator, currentValue)=>{
                return {key:'total', value: accumulator.value + currentValue.value }
            }).value,
            shares: metric.page_positive_feedback_by_type.find(el => el.key == 'link').value,
            comments: metric.page_positive_feedback_by_type.find(el => el.key == 'comment').value,
            clicks: metric.page_clics,
            organic_post: rand(999999),
            paid_post: rand(999999),
            video_viwes: metric.page_video_views,
            inbox_messages: metric.page_message_count
        })
    }
    return response;
}