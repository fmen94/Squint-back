import { CONTEXT, PERIODS } from "../../../interfaces/common";
import moment from 'moment';
import { DynamoDB } from "aws-sdk";
import { ReadSitesPulseFansCountrySectionResponse } from "../../../interfaces/pulse/sites";
import { parseResponse } from "../../../helpers/common/parseResults.helper";

function rand(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
}
export const readSitesPulseFansCountrySection = async (ctx:CONTEXT,start:number,period:PERIODS) => {
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
			Pais: 'México',
			Cantidad: 1324000
		},
		{
			Pais: 'United States',
			Cantidad: 1224000
		},
		{
			Pais: 'Perú',
			Cantidad: 132400
		},
		{
			Pais: 'Argentina',
			Cantidad: 13240
		},
		{
			Pais: 'Colombia',
			Cantidad: 13240
		},
		{
			Pais: 'Brazil',
			Cantidad: 13240
		},
		{
			Pais: 'United Kindom',
			Cantidad: 13240
		},
		{
			Pais: 'France',
			Cantidad: 13200
		},
		{
			Pais: 'Spain',
			Cantidad: 13200
		},
		{
			Pais: 'Italy',
			Cantidad: 100
		}
    ];
}