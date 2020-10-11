import { CONTEXT, PERIODS } from "../../../interfaces/common";
import moment from 'moment';
import { DynamoDB } from "aws-sdk";
import { ReadTrafficPerformanceSectionResponse } from "../../../interfaces/pulse/sites";
import { parseResponse } from "../../../helpers/common/parseResults.helper";

function rand(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
}
export const readTrafficPerformanceSection = async (ctx:CONTEXT,start:number,period:PERIODS) => {
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
			Traffic_Performance_Name: 'Direct',
			Traffic_Performance_Spend: 123456,
			Traffic_Performance_Impression: 5000000,
			Traffic_Performance_Video_Views: 1324000,
			Traffic_Performance_Reach: 3830000,
			Traffic_Performance_Frecuency: 6494000,
			Traffic_Performance_Interactions: 9494000,
			Traffic_Performance_Clicks: 2.3,
			Traffic_Performance_CTR: 3.5,
			Traffic_Performance_CPC: 3456
		},{
			Traffic_Performance_Name: 'Social',
			Traffic_Performance_Spend: 123456,
			Traffic_Performance_Impression: 5000000,
			Traffic_Performance_Video_Views: 1324000,
			Traffic_Performance_Reach: 3830000,
			Traffic_Performance_Frecuency: 6494000,
			Traffic_Performance_Interactions: 9494000,
			Traffic_Performance_Clicks: 2.3,
			Traffic_Performance_CTR: 3.5,
			Traffic_Performance_CPC: 3456
		},{
			Traffic_Performance_Name: 'Referal',
			Traffic_Performance_Spend: 123456,
			Traffic_Performance_Impression: 5000000,
			Traffic_Performance_Video_Views: 1324000,
			Traffic_Performance_Reach: 3830000,
			Traffic_Performance_Frecuency: 6494000,
			Traffic_Performance_Interactions: 9494000,
			Traffic_Performance_Clicks: 2.3,
			Traffic_Performance_CTR: 3.5,
			Traffic_Performance_CPC: 3456
		},{
			Traffic_Performance_Name: 'SEO',
			Traffic_Performance_Spend: 123456,
			Traffic_Performance_Impression: 5000000,
			Traffic_Performance_Video_Views: 1324000,
			Traffic_Performance_Reach: 3830000,
			Traffic_Performance_Frecuency: 6494000,
			Traffic_Performance_Interactions: 9494000,
			Traffic_Performance_Clicks: 2.3,
			Traffic_Performance_CTR: 3.5,
			Traffic_Performance_CPC: 3456
		},{
			Traffic_Performance_Name: 'SEM',
			Traffic_Performance_Spend: 123456,
			Traffic_Performance_Impression: 5000000,
			Traffic_Performance_Video_Views: 1324000,
			Traffic_Performance_Reach: 3830000,
			Traffic_Performance_Frecuency: 6494000,
			Traffic_Performance_Interactions: 9494000,
			Traffic_Performance_Clicks: 2.3,
			Traffic_Performance_CTR: 3.5,
			Traffic_Performance_CPC: 3456
		},{
			Traffic_Performance_Name: 'Display',
			Traffic_Performance_Spend: 123456,
			Traffic_Performance_Impression: 5000000,
			Traffic_Performance_Video_Views: 1324000,
			Traffic_Performance_Reach: 3830000,
			Traffic_Performance_Frecuency: 6494000,
			Traffic_Performance_Interactions: 9494000,
			Traffic_Performance_Clicks: 2.3,
			Traffic_Performance_CTR: 3.5,
			Traffic_Performance_CPC: 3456
		},{
			Traffic_Performance_Name: 'OLV',
			Traffic_Performance_Spend: 123456,
			Traffic_Performance_Impression: 5000000,
			Traffic_Performance_Video_Views: 1324000,
			Traffic_Performance_Reach: 3830000,
			Traffic_Performance_Frecuency: 6494000,
			Traffic_Performance_Interactions: 9494000,
			Traffic_Performance_Clicks: 2.3,
			Traffic_Performance_CTR: 3.5,
			Traffic_Performance_CPC: 3456
		},{
			Traffic_Performance_Name: 'Email',
			Traffic_Performance_Spend: 123456,
			Traffic_Performance_Impression: 5000000,
			Traffic_Performance_Video_Views: 1324000,
			Traffic_Performance_Reach: 3830000,
			Traffic_Performance_Frecuency: 6494000,
			Traffic_Performance_Interactions: 9494000,
			Traffic_Performance_Clicks: 2.3,
			Traffic_Performance_CTR: 3.5,
			Traffic_Performance_CPC: 3456
		}
    ];
}