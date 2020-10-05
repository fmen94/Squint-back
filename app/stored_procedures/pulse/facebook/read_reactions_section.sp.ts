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
            'page_reactions_like',
            'page_reactions_love',
            'page_reactions_haha',
            'page_reactions_wow',
            'page_reactions_sorry',
            'page_reactions_anger',
            'page_message_count',
            'page_clics',
            'page_positive_feedback_by_type',
            'page_negative_feedback_by_type'
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


    /* inicio del matcheo */

    let response = []
    for(let x = 0; x<processedMetrics.length; x++){
        let metric = processedMetrics[x];
        let shares = metric.page_positive_feedback_by_type.find(s=>{
            if(s.key == 'link'){
                return s;
            }
        });
        let others = metric.page_positive_feedback_by_type.find(s=>{
            if(s.key == 'other'){
                return s;
            }
        });
        let RSVP = metric.page_positive_feedback_by_type.find(s=>{
            if(s.key == 'rsvp'){
                return s;
            }
        });
        let hide_clicks = metric.page_positive_feedback_by_type.find(s=>{
            if(s.key == 'hide_clicks'){
                return s;
            }
        });
        let hide_all_clicks = metric.page_positive_feedback_by_type.find(s=>{
            if(s.key == 'hide_all_clicks'){
                return s;
            }
        });
        let report_spam_clicks = metric.page_positive_feedback_by_type.find(s=>{
            if(s.key == 'report_spam_clicks'){
                return s;
            }
        });
        let unlike_page = metric.page_positive_feedback_by_type.find(s=>{
            if(s.key == 'unlike_page'){
                return s;
            }
        });
        

        /*page_negative_feedback_by_type */
        response.push(
            { like: metric.page_reactions_like,
                live: metric.page_reactions_love,
                haha: metric.page_reactions_haha,
                think: rand(9999),
                wow: metric.page_reactions_wow,
                sad: metric.page_reactions_sorry,
                angry: metric.page_reactions_anger,
                messages: metric.page_message_count || 0,
                shares: shares ? shares.value : 0,
                clicks: metric.page_clics,
                others: others ? others.value : 0,
                respond_to_an_event: RSVP ? RSVP.value : 0,
                hide_this_story: hide_clicks ? hide_clicks.value : 0,
                hide_all_post_from_this_page: hide_all_clicks ? hide_all_clicks.value : 0,
                report_an_object_as_a_spam: report_spam_clicks ? report_spam_clicks.value : 0,
                unlike_a_page: unlike_page ? unlike_page.value : 0,
                fecha: metric.metric_timestamp  }
        )
    }
    /* fin del matcheo */
    console.log(response);
    return response;
}