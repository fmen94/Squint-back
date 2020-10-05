import { CONTEXT, PERIODS } from "../../../interfaces/common";
import moment from 'moment';
import { DynamoDB } from "aws-sdk";
import { ReadReactionsSectionResponse } from "../../../interfaces/pulse/facebook";
import { parseResponse } from "../../../helpers/common/parseResults.helper";

function rand(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
}
export const readReactionSection = async (ctx:CONTEXT,start:number,period:PERIODS) => {
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

            /*'page_fans',
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
            'page_clics',
            'page_fans_by_like_source'*/
            'page_reactions_like'
        ]
    }).promise();

    /*let pageInfo = await dynamo.query({
        TableName: 'FB_PAGE_INFO',
        IndexName: 'pageidIndex',
        ScanIndexForward: false,
        KeyConditions: {
            'page_id': {
                ComparisonOperator: 'EQ',
                AttributeValueList: [{ 'S': ctx.id }]
            }
        },
        AttributesToGet: [
            'system_timestamp',
            'fan_count',
            'global_account'
        ],
        Limit: 1
    }).promise();*/

    let processedMetrics:ReadReactionsSectionResponse[] = [];
    for(let index in metrics.Items){
        let metric:any = parseResponse(metrics.Items[index],true);
        processedMetrics.push(metric)
    }
    processedMetrics = processedMetrics.filter((elem,index,self)=>{
        let find = self.findIndex(e=>e.metric_timestamp == elem.metric_timestamp);
        if(index == find){
            return elem;
        }
    });
    console.log(processedMetrics);
/*
    let processedPageInfo:ReadTopSectionPageInfoResponse = parseResponse(pageInfo.Items[0],true);

    let response = []
    for(let x = 0; x<processedMetrics.length; x++){
        let metric = processedMetrics[x];
        let viral_fans = metric.page_fans_by_like_source===null ? [] : metric.page_fans_by_like_source.filter(s=>{
            if(s.key == 'News Feed' || s.key == 'Page Suggestions'){
                return s;
            }
        });
        response.push({
            page_fans: metric.page_fans,
            total_fans: processedPageInfo.global_account.fans===null ? processedPageInfo.fan_count : processedPageInfo.global_account.fans,
            engaged_users: metric.page_engaged_users,
            interactions: metric.page_post_engagements,
            row_date: metric.metric_timestamp,
            fans_page: metric.page_fans,
            organic_fans: metric.page_fans_organic,
            paid_fans: metric.page_fans_organic,
            viral_fans: !viral_fans.length ? 0 : viral_fans.reduce((accumulator, currentValue)=>{
                return {key:'total', value: accumulator.value + currentValue.value }
            }).value,
            investment: rand(999999),
            total_impressions: metric.page_impressions,
            paid_impressions: metric.page_impressions_paid,
            organic_impressions: metric.page_impressions_organic,
            viral_impressions: metric.page_impressions_viral,
            total_engagement: metric.page_post_engagements,
            paid_engagement: ((metric.page_impressions_paid / metric.page_post_engagements) * 100),
            organic_engagement: ((metric.page_impressions_organic / metric.page_post_engagements) * 100),
            viral_engagement: ((metric.page_impressions_viral / metric.page_post_engagements) * 100),
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
    }*/
    return [
        { like: 88000,
            live: 35000,
            haha: 37000,
            think: 35000,
            wow: 50000,
            sad: 21000,
            angry: 8000,
            messages: 420,
            shares: 639,
            clicks: 202,
            others: 157,
            respond_to_an_event: 119,
            hide_this_story: 639,
            hide_all_post_from_this_page: 202,
            report_an_object_as_a_spam: 137,
            unlike_a_page: 426,
            fecha: '2020-09-16T16:11:55.757Z' }
    ];
}