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
    const dynamo:DynamoDB = ctx.dynamodb;

    let posts = await dynamo.query({
        TableName: 'FB_FEED',
        IndexName: 'pageidPIndex',
        ScanIndexForward: false,
        KeyConditionExpression: '#pi = :pi AND #pt <= :pt',
        FilterExpression: '#ai = :ai',
        ExpressionAttributeNames: {
            '#pi': 'page_id',
            '#pt': 'post_timestamp',
            '#ai': 'post_author_id'
        },
        ExpressionAttributeValues: {
            ':pi': { 'S': ctx.id },
            ':pt': { 'N': moment().unix().toString() },
            ':ai': { 'S': ctx.id }
        }
    }).promise();
    console.log('ENTRA AQUI',posts);

    let processedposts:PostResponse[] = [];
    for(let index in posts.Items){
        let post:PostResponse = parseResponse(posts.Items[index],true);
        processedposts.push(post);
    }

    processedposts = processedposts.filter((elem,index,self)=>{
        let find = self.findIndex(e=>e.post_id == elem.post_id);
        if(index == find){
            return elem;
        }
    });


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