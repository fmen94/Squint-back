import { CONTEXT, PERIODS } from "../../../interfaces/common";
import moment from 'moment';
import { DynamoDB } from "aws-sdk";
import { ReadSitesPulsePostSectionResponse } from "../../../interfaces/pulse/sites";
import { parseResponse } from "../../../helpers/common/parseResults.helper";

function rand(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
}
export const ReadSitesPulsePostSection = async (ctx:CONTEXT,start:number,period:PERIODS) => {
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
			Users_Unique_Visits: 234653345,
			Sessions_Totals_Visits: 678980428,
			Bounce_Rate: 129678980,
			Convertion_Rate: 345,
			New_Users: 679250429,
			System_Metric_Date: '09/10/2020',
			Reach_Rank: 2345,
			Reach_Per_Millon: 5335,
			Page_Views_Rank: 9250429,
			Page_Views_Per_Millon: 0.51
		},{
			Users_Unique_Visits: 224653345,
			Sessions_Totals_Visits: 668980428,
			Bounce_Rate: 119678980,
			Convertion_Rate: 335,
			New_Users: 669250429,
			System_Metric_Date: '08/10/2020',
			Reach_Rank: 2345,
			Reach_Per_Millon: 5335,
			Page_Views_Rank: 9250429,
			Page_Views_Per_Millon: 0.51
		},{
			Users_Unique_Visits: 224653345,
			Sessions_Totals_Visits: 668980428,
			Bounce_Rate: 119678980,
			Convertion_Rate: 335,
			New_Users: 669250429,
			System_Metric_Date: '07/10/2020',
			Reach_Rank: 2345,
			Reach_Per_Millon: 5335,
			Page_Views_Rank: 9250429,
			Page_Views_Per_Millon: 0.51
		},{
			Users_Unique_Visits: 224653345,
			Sessions_Totals_Visits: 668980428,
			Bounce_Rate: 119678980,
			Convertion_Rate: 335,
			New_Users: 669250429,
			System_Metric_Date: '06/10/2020',
			Reach_Rank: 2345,
			Reach_Per_Millon: 5335,
			Page_Views_Rank: 9250429,
			Page_Views_Per_Millon: 0.51
		},{
			Users_Unique_Visits: 224653345,
			Sessions_Totals_Visits: 668980428,
			Bounce_Rate: 119678980,
			Convertion_Rate: 335,
			New_Users: 669250429,
			System_Metric_Date: '05/10/2020',
			Reach_Rank: 2345,
			Reach_Per_Millon: 5335,
			Page_Views_Rank: 9250429,
			Page_Views_Per_Millon: 0.51
		},{
			Users_Unique_Visits: 224653345,
			Sessions_Totals_Visits: 668980428,
			Bounce_Rate: 119678980,
			Convertion_Rate: 335,
			New_Users: 669250429,
			System_Metric_Date: '04/10/2020',
			Reach_Rank: 2345,
			Reach_Per_Millon: 5335,
			Page_Views_Rank: 9250429,
			Page_Views_Per_Millon: 0.51
		},{
			Users_Unique_Visits: 224653345,
			Sessions_Totals_Visits: 668980428,
			Bounce_Rate: 119678980,
			Convertion_Rate: 335,
			New_Users: 669250429,
			System_Metric_Date: '03/10/2020',
			Reach_Rank: 2345,
			Reach_Per_Millon: 5335,
			Page_Views_Rank: 9250429,
			Page_Views_Per_Millon: 0.51
		},{
			Users_Unique_Visits: 224653345,
			Sessions_Totals_Visits: 668980428,
			Bounce_Rate: 119678980,
			Convertion_Rate: 335,
			New_Users: 669250429,
			System_Metric_Date: '02/10/2020',
			Reach_Rank: 2345,
			Reach_Per_Millon: 5335,
			Page_Views_Rank: 9250429,
			Page_Views_Per_Millon: 0.51
		}
    ];
}