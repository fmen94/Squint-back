import { CONTEXT, PERIODS } from "../../../interfaces/common";
import moment from 'moment';
import { DynamoDB } from "aws-sdk";
import { PostResponse, ReadTopSectionPageInfoResponse, ReadTopSectionResponse } from "../../../interfaces/pulse/facebook";
import { parseResponse } from "../../../helpers/common/parseResults.helper";

function rand(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
}
export const readPostSection = async (ctx:CONTEXT,limit:number) => {
    const start = moment().unix();
    const lambda = ctx.lambda;
    let feedPromise = lambda.invoke({
        FunctionName: 'squint_reader_fb_page_feed',
        Payload: JSON.stringify({
            page_id: ctx.id,
            start: start,
            daysBefore: 30
        })
    }).promise().then((data:any)=>{
        return JSON.parse(JSON.parse(data.Payload).body)
    });

    let processedposts:any[] = [];
    await Promise.all([feedPromise]).then(r=>{
        processedposts = r[0];
    }).catch(err=>{
        console.log(err);
    });
    const dynamo = ctx.dynamodb;
    let result = [];
    for(let x=0; x<10; x++){
        let post = processedposts[x];
        if(!post) break;
        let insData:any = {};
        if(post.post_promotable_id){
            let ad = await dynamo.query({
                TableName: 'FB_MARKETING_ADS',
                IndexName: 'pageidIndex',
                ScanIndexForward: false,
                KeyConditionExpression: '#pi = :pi AND #st <= :st',
                FilterExpression: '#cr = :cr',
                ExpressionAttributeNames: {
                    '#pi': 'page_id',
                    '#st': 'system_timestamp',
                    '#cr': 'creative.effective_object_story_id'
                },
                ExpressionAttributeValues: {
                    ':pi': { 'S': ctx.id },
                    ':st': {'N': moment().unix().toString() },
                    ':cr': { 'S': post.post_promotable_id },
                },
                Limit: 1
            }).promise();
            if(ad.Items.length){
                let adInfo = parseResponse(ad.Items[0],true);
                let ad_id = adInfo.ad_id;
                let insights = await dynamo.query({
                    TableName: 'FB_MARKETING_INSIGHTS',
                    IndexName: 'pageidSIndex',
                    ScanIndexForward: false,
                    KeyConditionExpression: '#pi = :pi AND #st <= :st',
                    FilterExpression: '#src = :src AND #srcid = :srcid',
                    ExpressionAttributeNames: {
                        '#pi': 'page_id',
                        '#st': 'system_timestamp',
                        '#src': 'source',
                        '#srcid': 'source_id'
                    },
                    ExpressionAttributeValues: {
                        ':pi': { 'S': ctx.id },
                        ':st': {'N': moment().unix().toString() },
                        ':src': { 'S': 'ADS' },
                        ':srcid': {'S': ad_id.toString() }
                    },
                    Limit: 1
                }).promise();
                insData = parseResponse(insights.Items[0],true);
            }
        }
        
        result.push({
            publication_date: moment(post.post_timestamp,'X').format('DD-MM-YYYYTHH:mm:ss'),
            url: post.post_url,
            image: post.post_image,
            promotion_status: post.post_promotion_status,
            text: post.post_content,
            spend: insData.spend||-1,
            impresions: post.post_impressions,
            video_views: post.post_video_views,
            reach: insData.reach||-1,
            frecuency: insData.frecuency||-1,
            interactions: insData.actions && insData.actions.length ? insData.actions.reduce((accumulator, currentValue)=>{
                return { action_type:'total', value: accumulator.value + currentValue.value }
            }).value : -1,
            clics: post.post_clicks,
            ctr: insData.ctr||-1,
            cpc: insData.cpc||-1,
            type: post.post_type,
            page_name: post.post_author_name,
            page_image: post.post_author_picture,
            like: post.post_reactions_like_total||0,
            love: post.post_reactions_love_total||0,
            haha: post.post_reactions_haha_total||0,
            woow: post.post_reactions_wow_total||0,
            sad: post.post_reactions_sorry_total||0,
            angry: post.post_reactions_anger_total||0,
            care: rand(99),
            comments: post.post_comments_count,
            negative_feedbacks: post.post_negative_feedback||0,
            shared: post.post_shares_count,
            engaged_users: post.post_engaged_users,
            engagemet_rate: ((post.post_impressions / post.post_engaged_users) * 100)||0,
            reactions: post.post_reactions_count,
            performance: 'Good performance'
        });
    }
    //console.log(result);
    return result;
}