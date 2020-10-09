import { CONTEXT, PERIODS } from "../../../interfaces/common";
import moment from 'moment';
import { DynamoDB } from "aws-sdk";
import { ReadDetailsSectionResponse } from "../../../interfaces/pulse/facebook";
import { parseResponse } from "../../../helpers/common/parseResults.helper";

function rand(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
}
export const readDetailsSection = async (ctx:CONTEXT) => {
    let start = moment().unix();
    let end = moment(start,'X').subtract(2,'days').unix();

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
            'page_impressions_unique',
            'page_fan_adds',
            'page_fan_removes'
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

    let processedMetrics:ReadDetailsSectionResponse[] = [];
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

    processedMetrics = processedMetrics.sort((a:any,b:any)=> {
        if(a.row_date > b.row_date){
            return 1;   
        }
        if(a.row_date < b.row_date){
            return -1;   
        }
        return 0;
    });

    let processedPageInfo = parseResponse(pageInfo.Items[0],true);

    let result = {
        name: processedPageInfo.page_name,
        country: 'MX',
        today_reach: processedMetrics[1].page_impressions_unique,
        yesterday_reach: processedMetrics[0].page_impressions_unique,
        today_news_fans: processedMetrics[1].page_fan_adds,
        yesterday_news_fans: processedMetrics[0].page_fan_adds,
        today_lost_fans: processedMetrics[1].page_fan_removes,
        yesterday_lost_fans: processedMetrics[0].page_fan_removes
    };

    return [ result ];
}