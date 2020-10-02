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
        IndexName: 'pageidIndex',
        ScanIndexForward: false,
        KeyConditions: {
            'page_id': {
                ComparisonOperator: 'EQ',
                AttributeValueList: [{ 'S': ctx.id }]
            }
        },
        AttributesToGet: [
            'post_timestamp',
            'system_timestamp',
            'page_id',
            'post_id',
            'post_image',
            'post_promotion_status',
            'post_content',
            'post_impressions',
            'post_video_views',
            'post_clicks',
            'post_type',
            'post_author_name',
            'post_author_picture',
            'post_reactions_like_total',
            'post_reactions_love_total',
            'post_reactions_wow_total',
            'post_reactions_haha_total',
            'post_reactions_sorry_total',
            'post_reactions_anger_total',
            'post_comments_count',
            'post_shares_count',
            'post_engaged_users',
            'post_reactions_count'
        ]
    }).promise();

    let processedposts:PostResponse[] = [];
    for(let index in posts.Items){
        let post:PostResponse = parseResponse(posts.Items[index],true);
        processedposts.push(post)
    }

    processedposts = processedposts.filter((elem,index,self)=>{
        let find = self.findIndex(e=>e.post_id == elem.post_id);
        if(index == find){
            return elem;
        }
    });

    let result = [];
    for(let x=0; x<limit; x++){
        let post = processedposts[x];
        result.push({
            publication_date: moment(post.post_timestamp,'X').format('DD-MM-YYYYTHH:mm:ss'),
            image: post.post_image,
            promotion_status: post.post_promotion_status,
            text: post.post_content,
            spend: rand(9999),
            impresions: post.post_impressions,
            video_views: post.post_video_views,
            reach: rand(9999),
            frecuency: rand(99),
            interactions: rand(9999),
            clics: post.post_clicks,
            ctr: (Math.random()*10).toFixed(2),
            cpc: Math.random().toFixed(2),
            type: post.post_type,
            page_name: post.post_author_name,
            page_image: post.post_author_picture,
            like: post.post_reactions_like_total,
            love: post.post_reactions_love_total,
            haha: post.post_reactions_haha_total,
            woow: post.post_reactions_wow_total,
            sad: post.post_reactions_sorry_total,
            angry: post.post_reactions_anger_total,
            comments: post.post_comments_count,
            negative_feedbacks: rand(9999),
            shared: post.post_shares_count,
            engaged_users: post.post_engaged_users,
            engagemet_rate: ((post.post_impressions / post.post_engaged_users) * 100),
            reactions: post.post_reactions_count
        });
    }

    console.log(result);
    return result;
}