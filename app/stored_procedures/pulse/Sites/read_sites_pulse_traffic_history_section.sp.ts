import { CONTEXT, PERIODS } from "../../../interfaces/common";
import moment from 'moment';
import { DynamoDB } from "aws-sdk";
import { ReadSitesPulseDomainsTrafficHistorySectionResponse } from "../../../interfaces/pulse/sites";
import { parseResponse } from "../../../helpers/common/parseResults.helper";

function rand(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
}
export const readSitesPulseDomainsTrafficHistorySection = async (ctx:CONTEXT,start:number,period:PERIODS) => {
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
            Metric_Date: '01/01/2019',
            Global_Rank: 292140,
            Reach_Per_Millon: 7367,
            Page_Views_Per_Millon: 1056,
            Page_Views_Per_User: 3897
        },
        {
            Metric_Date: '01/02/2019',
            Global_Rank: 292270,
            Reach_Per_Millon: 7367,
            Page_Views_Per_Millon: 1056,
            Page_Views_Per_User: 3897
        },
        {
            Metric_Date: '01/03/2019',
            Global_Rank: 292270,
            Reach_Per_Millon: 7367,
            Page_Views_Per_Millon: 1056,
            Page_Views_Per_User: 3897
        },
        {
            Metric_Date: '01/04/2019',
            Global_Rank: 292270,
            Reach_Per_Millon: 7367,
            Page_Views_Per_Millon: 1056,
            Page_Views_Per_User: 3897
        },
        {
            Metric_Date: '01/05/2019',
            Global_Rank: 292410,
            Reach_Per_Millon: 7367,
            Page_Views_Per_Millon: 1056,
            Page_Views_Per_User: 3897
        },
        {
            Metric_Date: '01/06/2019',
            Global_Rank: 292540,
            Reach_Per_Millon: 7367,
            Page_Views_Per_Millon: 1056,
            Page_Views_Per_User: 3897
        },
        {
            Metric_Date: '01/07/2019',
            Global_Rank: 292540,
            Reach_Per_Millon: 7367,
            Page_Views_Per_Millon: 1056,
            Page_Views_Per_User: 3897
        },
        {
            Metric_Date: '01/08/2019',
            Global_Rank: 292670,
            Reach_Per_Millon: 7367,
            Page_Views_Per_Millon: 1056,
            Page_Views_Per_User: 3897
        },
        {
            Metric_Date: '01/09/2019',
            Global_Rank: 292820,
            Reach_Per_Millon: 7367,
            Page_Views_Per_Millon: 1056,
            Page_Views_Per_User: 3897
        },
        {
            Metric_Date: '01/10/2019',
            Global_Rank: 292950,
            Reach_Per_Millon: 7367,
            Page_Views_Per_Millon: 1056,
            Page_Views_Per_User: 3897
        },
        {
            Metric_Date: '01/11/2019',
            Global_Rank: 292950,
            Reach_Per_Millon: 7367,
            Page_Views_Per_Millon: 1056,
            Page_Views_Per_User: 3897
        },
        {
            Metric_Date: '01/12/2019',
            Global_Rank: 292950,
            Reach_Per_Millon: 7367,
            Page_Views_Per_Millon: 1056,
            Page_Views_Per_User: 3897
        }
    ];
}