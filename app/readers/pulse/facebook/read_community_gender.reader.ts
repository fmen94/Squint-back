import { CONTEXT, PERIODS } from "../../../interfaces/common";
import moment from 'moment';
import { DynamoDB } from "aws-sdk";
import { ProcessedGender, ReadCommunityGender, ReadDetailsSectionResponse } from "../../../interfaces/pulse/facebook";
import { parseResponse } from "../../../helpers/common/parseResults.helper";

function rand(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
}
export const readCommunityGender = async (ctx:CONTEXT,start:number,period:PERIODS) => {
    const lambda = ctx.lambda;

    let metricsPromise = lambda.invoke({
        FunctionName: 'squint_reader_fb_page_insights',
        Payload: JSON.stringify({
            page_id: ctx.id,
            start: start,
            daysBefore: 10
        })
    }).promise().then((data:any)=>{
        return JSON.parse(JSON.parse(data.Payload).body)
    });

    let processedMetrics: any = [];
    await Promise.all([metricsPromise]).then(r=>{
        processedMetrics = r[0];
    }).catch(err=>{
        console.log(err);
    });

    processedMetrics = processedMetrics.filter(el => el.page_fans_gender_age != null);
    let genders = processedMetrics[0].page_fans_gender_age;
    let mappedGenders:ProcessedGender[] = genders.map(g=>{
        let genderAge = g.key.split('.');
        return {
            genero: genderAge[0]=='F' ? 'Women' : genderAge[0]=='M' ? 'men' : 'Others',
            age: genderAge[1],
            cantidad: g.value
        }
    })
    return mappedGenders;
}