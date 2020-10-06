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
    //start = moment(start,'X').subtract(2,'days').unix();
    let end = moment(start,'X').subtract(5,'days').unix();
    //console.log(moment(start,'X'),moment(end,'X'));

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
    processedMetrics = processedMetrics.filter((elem,index,self)=>{
        let find = self.findIndex(e=>e.metric_timestamp == elem.metric_timestamp);
        if(index == find){
            return elem;
        }
    });
    let sourcesMetrics = processedMetrics.filter(el => el.page_views_external_referrals != null);
    let externalSources = sourcesMetrics[0] ? sourcesMetrics[0].page_views_external_referrals.map(s=>{
        return { origen: s.key, cantidad: s.value, tipo: 'External' };
    }) : [];
    let internalSources = sourcesMetrics[0] ? sourcesMetrics[0].page_fans_by_like_source.map(s=>{
        return { origen: s.key, cantidad: s.value, tipo: 'Internal' };
    }) : [];

    let sources = [
        ...externalSources,
        ...internalSources,
        { origen: '3s', cantidad: processedMetrics[0].page_video_views, tipo: 'video_views' },
        { origen: '10s', cantidad: processedMetrics[0].page_video_views_10s, tipo: 'video_views' },
        { origen: '95', cantidad: processedMetrics[0].page_video_views_30s, tipo: 'video_views' },
        { origen: 'paid', cantidad: processedMetrics[0].page_impressions_paid, tipo: 'post_speend' },
        { origen: 'organic', cantidad: processedMetrics[0].page_impressions_organic, tipo: 'post_speend' },
        { origen: 'viral', cantidad: processedMetrics[0].page_impressions_viral, tipo: 'post_speend' }
    ];
    return sources;
}