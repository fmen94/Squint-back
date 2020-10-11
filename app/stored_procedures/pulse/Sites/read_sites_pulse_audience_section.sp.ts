import { CONTEXT, PERIODS } from "../../../interfaces/common";
import moment from 'moment';
import { DynamoDB } from "aws-sdk";
import { ReadSitesPulseAudienceSectionResponse } from "../../../interfaces/pulse/sites";
import { parseResponse } from "../../../helpers/common/parseResults.helper";

function rand(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
}
export const readSitesPulseAudienceSection = async (ctx:CONTEXT,start:number,period:PERIODS) => {
    let end = moment(start,'X').subtract(2,'days').unix();

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
        },
        AttributesToGet: [
            'metric_timestamp',
            'system_timestamp',
            'page_fans_gender_age'
        ]
    }).promise();*/


	/*
    let processedMetrics:ReadCommunityGender[] = [];
    for(let index in metrics.Items){
        let metric:any = parseResponse(metrics.Items[index],true);
        processedMetrics.push(metric)
    }
    processedMetrics = processedMetrics.filter((elem,index,self)=>{
        let find = self.findIndex(e=>e.metric_timestamp == elem.metric_timestamp);
        if(index == find){
            return elem;
        }
    }).filter(el => el.page_fans_gender_age != null);
    let genders = processedMetrics[0].page_fans_gender_age;
    let mappedGenders:ProcessedGender[] = genders.map(g=>{
        let genderAge = g.key.split('.');
        return {
            genero: genderAge[0]=='F' ? 'Women' : genderAge[0]=='M' ? 'men' : 'Others',
            age: genderAge[1],
            cantidad: g.value
        }
    })
	
	*/
	
	
	
    return [
        {
            Origen: 'google.com',
            Cantidad: 450,
            Tipo: 'External'
        },
        {
            Origen: 'Facebook.com',
            Cantidad: 380,
            Tipo: 'External'
        },
        {
            Origen: 'Twitter.com',
            Cantidad: 222,
            Tipo: 'External'
        },
        {
            Origen: 'Yahoo.com',
            Cantidad: 157,
            Tipo: 'External'
        },
        {
            Origen: 'Youtube.com',
            Cantidad: 139,
            Tipo: 'External'
        },
        {
            Origen: 'Ads',
            Cantidad: 450,
            Tipo: 'Internal'
        },
        {
            Origen: 'Your page',
            Cantidad: 380,
            Tipo: 'Internal'
        },
        {
            Origen: 'Search',
            Cantidad: 222,
            Tipo: 'Internal'
        },
        {
            Origen: 'New feed',
            Cantidad: 157,
            Tipo: 'Internal'
        },
        {
            Origen: 'Others',
            Cantidad: 139,
            Tipo: 'Internal'
        }
    ];
}