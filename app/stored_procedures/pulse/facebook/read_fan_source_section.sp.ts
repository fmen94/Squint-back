import { CONTEXT, PERIODS } from "../../../interfaces/common";
import moment from 'moment';
import { DynamoDB } from "aws-sdk";
import { ProcessedGender, ReadCommunityGender, ReadDetailsSectionResponse, ReadFanSourceSection } from "../../../interfaces/pulse/facebook";
import { parseResponse } from "../../../helpers/common/parseResults.helper";

function rand(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
}
export const readFanSourceSection = async (ctx:CONTEXT,start:number,period:PERIODS) => {
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
            'page_views_external_referrals',
            'page_fans_by_like_source'
        ]*/
    }).promise();

    let processedMetrics:ReadFanSourceSection[] = [];
    for(let index in metrics.Items){
        let metric:any = parseResponse(metrics.Items[index],true);
        processedMetrics.push(metric)
    }
    console.log(processedMetrics);
    processedMetrics = processedMetrics.filter((elem,index,self)=>{
        let find = self.findIndex(e=>e.metric_timestamp == elem.metric_timestamp);
        if(index == find){
            return elem;
        }
    }).filter(el => el.page_views_external_referrals != null);
    let externalSources = processedMetrics[0].page_views_external_referrals.map(s=>{
        return { origen: s.key, cantidad: s.value, tipo: 'External' };
    });
    let internalSources = processedMetrics[0].page_fans_by_like_source.map(s=>{
        return { origen: s.key, cantidad: s.value, tipo: 'Internal' };
    });

    let sources = [
        ...externalSources,
        ...internalSources
    ];
    return sources;
}