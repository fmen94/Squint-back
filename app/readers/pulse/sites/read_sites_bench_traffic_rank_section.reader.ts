import { CONTEXT, PERIODS } from "../../../interfaces/common";
import moment from 'moment';
import { DynamoDB } from "aws-sdk";
import { ReadSitesBenchTrafficRankSectionResponse } from "../../../interfaces/pulse/sites";
import { parseResponse } from "../../../helpers/common/parseResults.helper";

function rand(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
}
export const readSitesBenchTrafficRankSection = async (ctx:CONTEXT,start:number,period:PERIODS) => {
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
            Nombre: 'Adidas',
            Global_Ranking: 123456,
            Local_Ranking: 1235,
            Category_Ranking: 6983,
            Load_Time: 118,
            Reach: 5.7,
            Rank: 123456,
            Page_Views: 1235,
            Page_Views_Per_User: 6983,
            Pais: 'Mexico'
        },{
            Nombre: 'Nike',
            Global_Ranking: 123456,
            Local_Ranking: 1235,
            Category_Ranking: 6983,
            Load_Time: 118,
            Reach: 5.7,
            Rank: 123456,
            Page_Views: 1235,
            Page_Views_Per_User: 6983,
            Pais: 'Mexico'
        },{
            Nombre: 'Puma',
            Global_Ranking: 123456,
            Local_Ranking: 1235,
            Category_Ranking: 6983,
            Load_Time: 118,
            Reach: 5.7,
            Rank: 123456,
            Page_Views: 1235,
            Page_Views_Per_User: 6983,
            Pais: 'Mexico'
        },{
            Nombre: 'Reebok',
            Global_Ranking: 123456,
            Local_Ranking: 1235,
            Category_Ranking: 6983,
            Load_Time: 118,
            Reach: 5.7,
            Rank: 123456,
            Page_Views: 1235,
            Page_Views_Per_User: 6983,
            Pais: 'Mexico'
        },{
            Nombre: 'New Balance',
            Global_Ranking: 123456,
            Local_Ranking: 1235,
            Category_Ranking: 6983,
            Load_Time: 118,
            Reach: 5.7,
            Rank: 123456,
            Page_Views: 1235,
            Page_Views_Per_User: 6983,
            Pais: 'Mexico'
        },{
            Nombre: 'Fila',
            Global_Ranking: 123456,
            Local_Ranking: 1235,
            Category_Ranking: 6983,
            Load_Time: 118,
            Reach: 5.7,
            Rank: 123456,
            Page_Views: 1235,
            Page_Views_Per_User: 6983,
            Pais: 'Mexico'
        },{
            Nombre: 'Converse',
            Global_Ranking: 123456,
            Local_Ranking: 1235,
            Category_Ranking: 6983,
            Load_Time: 118,
            Reach: 5.7,
            Rank: 123456,
            Page_Views: 1235,
            Page_Views_Per_User: 6983,
            Pais: 'Mexico'
        },{
            Nombre: 'Under Armour',
            Global_Ranking: 123456,
            Local_Ranking: 1235,
            Category_Ranking: 6983,
            Load_Time: 118,
            Reach: 5.7,
            Rank: 123456,
            Page_Views: 1235,
            Page_Views_Per_User: 6983,
            Pais: 'Mexico'
        },{
            Nombre: 'Vans',
            Global_Ranking: 123456,
            Local_Ranking: 1235,
            Category_Ranking: 6983,
            Load_Time: 118,
            Reach: 5.7,
            Rank: 123456,
            Page_Views: 1235,
            Page_Views_Per_User: 6983,
            Pais: 'Mexico'
        },{
            Nombre: 'Charly',
            Global_Ranking: 123456,
            Local_Ranking: 1235,
            Category_Ranking: 6983,
            Load_Time: 118,
            Reach: 5.7,
            Rank: 123456,
            Page_Views: 1235,
            Page_Views_Per_User: 6983,
            Pais: 'Mexico'
        },{
            Nombre: 'The north face',
            Global_Ranking: 123456,
            Local_Ranking: 1235,
            Category_Ranking: 6983,
            Load_Time: 118,
            Reach: 5.7,
            Rank: 123456,
            Page_Views: 1235,
            Page_Views_Per_User: 6983,
            Pais: 'Mexico'
        }
    ];
}