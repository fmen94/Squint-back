import { CONTEXT, PERIODS } from "../../../interfaces/common";
import moment from 'moment';
import { DynamoDB } from "aws-sdk";
import { ReadSitesPulseGenderSectionResponse } from "../../../interfaces/pulse/sites";
import { parseResponse } from "../../../helpers/common/parseResults.helper";

function rand(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
}
export const readSitesPulseGenderSection = async (ctx:CONTEXT,start:number,period:PERIODS) => {
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
			Gender: 'Woman',
			Age: '12-17',
			Quantity: 3000000
		},
		{
			Gender: 'Men',
			Age: '12-17',
			Quantity: 4000000
		},
		{
			Gender: 'Others',
			Age: '12-17',
			Quantity: 5000000
		},
		{
			Gender: 'Woman',
			Age: '18-24',
			Quantity: 20000000
		},
		{
			Gender: 'Men',
			Age: '18-24',
			Quantity: 14000000
		},
		{
			Gender: 'Others',
			Age: '18-24',
			Quantity: 5000000
		},
		{
			Gender: 'Woman',
			Age: '25-34',
			Quantity: 20000000
		},
		{
			Gender: 'Men',
			Age: '25-34',
			Quantity: 20000000
		},
		{
			Gender: 'Others',
			Age: '25-34',
			Quantity: 13000000
		},
		{
			Gender: 'Woman',
			Age: '35-44',
			Quantity: 10000000
		},
		{
			Gender: 'Men',
			Age: '35-44',
			Quantity: 7000000
		},
		{
			Gender: 'Others',
			Age: '35-44',
			Quantity: 6000000
		},
		{
			Gender: 'Woman',
			Age: '45-54',
			Quantity: 15000000
		},
		{
			Gender: 'Men',
			Age: '45-54',
			Quantity: 10000000
		},
		{
			Gender: 'Others',
			Age: '45-54',
			Quantity: 7000000
		},
		{
			Gender: 'Woman',
			Age: '55-64',
			Quantity: 3000000
		},
		{
			Gender: 'Men',
			Age: '55-64',
			Quantity: 2000000
		},
		{
			Gender: 'Others',
			Age: '55-64',
			Quantity: 4000000
		},
		{
			Gender: 'Woman',
			Age: '+65',
			Quantity: 1000000
		},
		{
			Gender: 'Men',
			Age: '+65',
			Quantity: 700000
		},
		{
			Gender: 'Others',
			Age: '+65',
			Quantity: 500000
		}
    ];
}