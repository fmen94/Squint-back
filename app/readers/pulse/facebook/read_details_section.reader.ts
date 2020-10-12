import { CONTEXT, PERIODS } from "../../../interfaces/common";
import moment from 'moment';
import { DynamoDB } from "aws-sdk";
import { ReadDetailsSectionResponse } from "../../../interfaces/pulse/facebook";
import { parseResponse } from "../../../helpers/common/parseResults.helper";
import { UserInputError } from "apollo-server-express";

function rand(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
}
export const readDetailsSection = async (ctx:CONTEXT) => {
    if(!ctx.id){
        throw new UserInputError("header - page_id");
    }
    let start = moment().unix();
    
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

    let pageInfoPromise = lambda.invoke({
        FunctionName: 'squint_reader_fb_page_info',
        Payload: JSON.stringify({
            page_id: ctx.id,
            start: start,
            daysBefore: 10
        })
    }).promise().then((data:any)=>{
        return JSON.parse(JSON.parse(data.Payload).body)
    });

    let processedMetrics: any = [];
    let pageInfoArray: any = [];
    await Promise.all([metricsPromise,pageInfoPromise]).then(r=>{
        processedMetrics = r[0];
        pageInfoArray = r[1];
    }).catch(err=>{
        console.log(err);
    });

    let processedPageInfo = pageInfoArray[0];

    let result = {
        name: processedPageInfo.page_name,
        country: 'MX',
        today_reach: processedMetrics[0].page_impressions_unique,
        yesterday_reach: processedMetrics[1].page_impressions_unique,
        today_news_fans: processedMetrics[0].page_fan_adds,
        yesterday_news_fans: processedMetrics[1].page_fan_adds,
        today_lost_fans: processedMetrics[0].page_fan_removes,
        yesterday_lost_fans: processedMetrics[1].page_fan_removes
    };

    return [ result ];
}