import { CONTEXT, PERIODS } from "../../../interfaces/common";
import moment from 'moment';
import { DynamoDB } from "aws-sdk";
import { ReadReactionsSectionResponse } from "../../../interfaces/pulse/facebook";
import { parseResponse } from "../../../helpers/common/parseResults.helper";
import { UserInputError } from "apollo-server-express";

function rand(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
}
export const readReactionSection = async (ctx:CONTEXT,start:number,period:PERIODS) => {
    if(!ctx.id){
        throw new UserInputError("header - page_id");
    }
    
    const lambda = ctx.lambda;

    let metricsPromise = lambda.invoke({
        FunctionName: 'squint_reader_fb_page_insights',
        Payload: JSON.stringify({
            page_id: ctx.id,
            start: start,
            daysBefore: 10
        })
    }).promise().then((data:any)=>{
        return JSON.parse(JSON.parse(data.Payload).body)
    });
    
    let processedMetrics: any = [];
    await Promise.all([metricsPromise]).then(r=>{
        processedMetrics = r[0];
    }).catch(err=>{
        console.log(err);
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
                fecha: metric.metric_timestamp
            }
        )
    }
    /* fin del matcheo */
    return response;
}