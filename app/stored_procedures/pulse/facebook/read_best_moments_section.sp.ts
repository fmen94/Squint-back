import { CONTEXT, PERIODS } from "../../../interfaces/common";
import moment from 'moment';
import { DynamoDB } from "aws-sdk";
import { ReadBestMomentsSectionResponse } from "../../../interfaces/pulse/facebook";
import { parseResponse } from "../../../helpers/common/parseResults.helper";

function rand(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
}
export const readBestMomentsSection = async (ctx:CONTEXT,start:string,period:PERIODS) => {
    //start = moment(start,'X').subtract(2,'days').unix();
    let end = moment(start,'X').subtract(2,'days').utc().hour(0).minute(0).second(0).unix();
    //console.log(moment(start,'X'),moment(end,'X'));

    const dynamo:DynamoDB = ctx.dynamodb;
    /*let metrics = await dynamo.query({
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
        }
    }).promise();*/
/*console.log(metrics)
    let processedMetrics:ReadBestMomentsSectionResponse[] = [];
    for(let index in metrics.Items){
        let metric:any = parseResponse(metrics.Items[index],true);
        processedMetrics.push(metric)
    }
    console.log('alto2')
    processedMetrics = processedMetrics.filter((elem,index,self)=>{
        let find = self.findIndex(e=>e.metric_timestamp == elem.metric_timestamp);
        if(index == find){
            return elem;
        }
        console.log('alto3')
    }).filter(el => el.page_views_external_referrals != null);
    let externalSources = processedMetrics[0] ? processedMetrics[0].page_views_external_referrals.map(s=>{
        return { origen: s.key, cantidad: s.value, tipo: 'External' };
    }) : [];
    let internalSources = processedMetrics[0] ? processedMetrics[0].page_fans_by_like_source.map(s=>{
        return { origen: s.key, cantidad: s.value, tipo: 'Internal' };
    }) : [];*/

    let sources = [ { origen: 'high', cantidad: '30 min', tipo: 'response_rate' },
                { origen: 'inmediately', cantidad: '30 min', tipo: 'response_time' },
                { origen: ' Monday', cantidad: '18:00 to 20:00', tipo: 'Best moment to interactions' },
                { origen: 'Sunday', cantidad: '18:00 to 20', tipo: 'best time to stories' },
                { origen: 'wednesday', cantidad: ' 18:00 to 20', tipo: 'best response time' },
                { origen: 'photo', cantidad: 'image', tipo: 'best format' } ]

    return sources;
}