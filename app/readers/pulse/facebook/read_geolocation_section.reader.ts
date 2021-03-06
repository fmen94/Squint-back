import { CONTEXT, PERIODS } from "../../../interfaces/common";
import moment from 'moment';
import { DynamoDB } from "aws-sdk";
import { ProcessedGender, ReadCommunityGender, ReadDetailsSectionResponse } from "../../../interfaces/pulse/facebook";
import { parseResponse } from "../../../helpers/common/parseResults.helper";
import { UserInputError } from "apollo-server-express";

function rand(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
}
export const readGeoLocationSection = async (ctx:CONTEXT,start:number,period:PERIODS) => {
    if(!ctx.id){
        throw new UserInputError("header - page_id");
    }
    let end = moment(start,'X').subtract(2,'days').utc().hour(0).minute(0).second(0).unix();

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
            'page_fans_gender_age'
        ]*/
    }).promise();

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
    return [
        { id: 'af45d18b-b6eb-4072-acbe-b987e394d757',
            iso_a2: 'CG',
            iso_a3: 'BS',
            position: 1,
            name: 'Belize',
            diff: 34029,
            value: 93445,
            cities_id: '375d3c59-8dfc-4029-9086-161326156dc3',
            cities_position: 1,
            cities_diff: 29614,
            cities_value: 7229,
            cities_country: 'Yemen',
            cities_name: 'West Eulamouth',
            cities_lat: 455131,
            cities_lng: -689722 }
    ];
}