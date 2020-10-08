import { CONTEXT, PERIODS } from "../../../interfaces/common";
import moment from 'moment';
import { DynamoDB } from "aws-sdk";
import { MarketingResponse, ReadTopSectionPageInfoResponse, ReadTopSectionResponse } from "../../../interfaces/pulse/facebook";
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
        IndexName: 'pageidSIndex',
        ScanIndexForward: false,
        KeyConditionExpression: '#pi = :pi AND #st <= :st',
        FilterExpression: '#mt BETWEEN :end and :start',
        ExpressionAttributeNames: {
            '#pi': 'page_id',
            '#st': 'system_timestamp',
            '#mt': 'metric_timestamp'
        },
        ExpressionAttributeValues: {
            ':pi': { 'S': ctx.id },
            ':st': {'N': moment().unix().toString() },
            ':start': {'N': start.toString() },
            ':end': {'N': end.toString() }
        }/*,
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
            'page_clics',
            'page_fans_by_like_source'
        ]*/
    }).promise();

    let pageInfo = await dynamo.query({
        TableName: 'FB_PAGE_INFO',
        IndexName: 'pageidIndex',
        ScanIndexForward: false,
        KeyConditionExpression: '#pi = :pi AND #st <= :st',
        ExpressionAttributeNames: {
            '#pi': 'page_id',
            '#st': 'system_timestamp'
        },
        ExpressionAttributeValues: {
            ':pi': { 'S': ctx.id },
            ':st': {'N': moment().unix().toString() }
        }/*,
        AttributesToGet: [
            'system_timestamp',
            'fan_count',
            'global_account'
        ]*/,
        Limit: 1
    }).promise();
    let marketing = await dynamo.query({
        TableName: 'FB_MARKETING_INSIGHTS',
        IndexName: 'pageidSIndex',
        ScanIndexForward: false,
        KeyConditionExpression: '#pi = :pi AND #st <= :st',
        FilterExpression: '#src = :src AND #mt BETWEEN :end and :start',
        ExpressionAttributeNames: {
            '#pi': 'page_id',
            '#st': 'system_timestamp',
            '#mt': 'metric_timestamp',
            '#src': 'source',
        },
        ExpressionAttributeValues: {
            ':pi': { 'S': ctx.id },
            ':st': {'N': moment().unix().toString() },
            ':start': {'N': start.toString() },
            ':end': {'N': end.toString() },
            ':src': {'S': 'ADACCOUNTS' },
        }
    }).promise();
    let processedMarketing:MarketingResponse[] = [];
    for(let index in marketing.Items){
        let metric:any = parseResponse(marketing.Items[index],true);
        processedMarketing.push(metric)
    }
    processedMarketing = processedMarketing.filter((elem,index,self)=>{
        let find = self.findIndex(e=>e.metric_timestamp == elem.metric_timestamp);
        if(index == find){
            return elem;
        }
    });

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
    });

    processedMetrics = processedMetrics.map((vme,i,s)=>{
        let mDate = moment(vme.metric_timestamp,'X').format('YYYYMMDD');
        let marketing = processedMarketing.find((vmk,i,s)=>{
            let markDate = moment(vmk.metric_timestamp,'X').format('YYYYMMDD');
            if(markDate===mDate){
                console.log(moment(vme.metric_timestamp,'X'),moment(vmk.metric_timestamp,'X'));
                return vmk;
            }
        });
        return {
            ...vme,
            ...marketing
        };
    });

    let processedPageInfo:ReadTopSectionPageInfoResponse = parseResponse(pageInfo.Items[0],true);
    let response = [];
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
            investment: metric.spend||0,
            total_impressions: metric.page_impressions,
            paid_impressions: metric.page_impressions_paid,
            organic_impressions: metric.page_impressions_organic,
            viral_impressions: metric.page_impressions_viral,
            total_engagement: metric.page_post_engagements,
            paid_engagement: ((metric.page_impressions_paid / metric.page_post_engagements) * 100),
            organic_engagement: ((metric.page_impressions_organic / metric.page_post_engagements) * 100),
            viral_engagement: ((metric.page_impressions_viral / metric.page_post_engagements) * 100),
            ad_impressions: metric.impressions||0,
            ad_reach: metric.reach||0,
            ad_interactions: metric.actions && metric.actions.length ? metric.actions.reduce((accumulator, currentValue)=>{
                return { action_type:'total', value: accumulator.value + currentValue.value }
            }).value : 0,
            ad_frecuency: metric.frequency||0,
            relevance_score: metric.impressions && metric.spend ? ((metric.spend / metric.impressions) * 100) : 0,
            ctr: metric.ctr||0,
            cpc: metric.cpc||0,
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
            inbox_messages: metric.page_message_count,
            reach: metric.page_impressions_unique
        })
    }
    return response;
}