import { CONTEXT, PERIODS } from "../../../interfaces/common";
import moment from 'moment';
import { DynamoDB } from "aws-sdk";
import { ReadSitesBenchGlobalRankSectionResponse } from "../../../interfaces/pulse/sites";
import { parseResponse } from "../../../helpers/common/parseResults.helper";

function rand(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
}
export const readSitesBenchGlobalRankSection = async (ctx:CONTEXT,start:number,period:PERIODS) => {
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
            Marca: 'Adidas',
            Global_Ranking_Audience: 13406056,
            Global_Ranking_Comparision: 13406056,
            Rank_Global: 13897367,
            Reach_Per_Millon: 1056,
            Page_Views_Per_User: 3897,
            Metric_timestamp: 12102020
        },{
            Marca: 'Nike',
            Global_Ranking_Audience: 13406056,
            Global_Ranking_Comparision: 13406056,
            Rank_Global: 13897367,
            Reach_Per_Millon: 1056,
            Page_Views_Per_User: 3897,
            Metric_timestamp: 12102020
        },{
            Marca: 'Puma',
            Global_Ranking_Audience: 13406056,
            Global_Ranking_Comparision: 13406056,
            Rank_Global: 13897367,
            Reach_Per_Millon: 1056,
            Page_Views_Per_User: 3897,
            Metric_timestamp: 12102020
        },{
            Marca: 'Reebok',
            Global_Ranking_Audience: 13406056,
            Global_Ranking_Comparision: 13406056,
            Rank_Global: 13897367,
            Reach_Per_Millon: 1056,
            Page_Views_Per_User: 3897,
            Metric_timestamp: 12102020
        },{
            Marca: 'New Balance',
            Global_Ranking_Audience: 13406056,
            Global_Ranking_Comparision: 13406056,
            Rank_Global: 13897367,
            Reach_Per_Millon: 1056,
            Page_Views_Per_User: 3897,
            Metric_timestamp: 12102020
        },{
            Marca: 'Fila',
            Global_Ranking_Audience: 13406056,
            Global_Ranking_Comparision: 13406056,
            Rank_Global: 13897367,
            Reach_Per_Millon: 1056,
            Page_Views_Per_User: 3897,
            Metric_timestamp: 12102020
        },{
            Marca: 'Converse',
            Global_Ranking_Audience: 13406056,
            Global_Ranking_Comparision: 13406056,
            Rank_Global: 13897367,
            Reach_Per_Millon: 1056,
            Page_Views_Per_User: 3897,
            Metric_timestamp: 12102020
        },{
            Marca: 'Under Armour',
            Global_Ranking_Audience: 13406056,
            Global_Ranking_Comparision: 13406056,
            Rank_Global: 13897367,
            Reach_Per_Millon: 1056,
            Page_Views_Per_User: 3897,
            Metric_timestamp: 12102020
        },{
            Marca: 'Vans',
            Global_Ranking_Audience: 13406056,
            Global_Ranking_Comparision: 13406056,
            Rank_Global: 13897367,
            Reach_Per_Millon: 1056,
            Page_Views_Per_User: 3897,
            Metric_timestamp: 12102020
        },{
            Marca: 'Charly',
            Global_Ranking_Audience: 13406056,
            Global_Ranking_Comparision: 13406056,
            Rank_Global: 13897367,
            Reach_Per_Millon: 1056,
            Page_Views_Per_User: 3897,
            Metric_timestamp: 12102020
        },{
            Marca: 'The north face',
            Global_Ranking_Audience: 13406056,
            Global_Ranking_Comparision: 13406056,
            Rank_Global: 13897367,
            Reach_Per_Millon: 1056,
            Page_Views_Per_User: 3897,
            Metric_timestamp: 12102020
        }
    ];
}