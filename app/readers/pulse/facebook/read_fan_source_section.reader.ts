import { CONTEXT, PERIODS } from "../../../interfaces/common";
import moment from 'moment';
import { DynamoDB } from "aws-sdk";
import { ProcessedGender, ReadCommunityGender, ReadDetailsSectionResponse, ReadFanSourceSection } from "../../../interfaces/pulse/facebook";
import { parseResponse } from "../../../helpers/common/parseResults.helper";
import { UserInputError } from "apollo-server-express";

function rand(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
}
export const readFanSourceSection = async (ctx:CONTEXT,start:number,period:PERIODS) => {
    if(!ctx.id){
        throw new UserInputError("header - page_id");
    }
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

    let feedPromise = lambda.invoke({
        FunctionName: 'squint_reader_fb_page_feed',
        Payload: JSON.stringify({
            page_id: ctx.id,
            start: start,
            daysBefore: 8
        })
    }).promise().then((data:any)=>{
        return JSON.parse(JSON.parse(data.Payload).body)
    });

    let processedMetrics: any = [];
    let processedposts:any[] = [];
    await Promise.all([metricsPromise,feedPromise]).then(r=>{
        processedMetrics = r[0];
        processedposts = r[1];
    }).catch(err=>{
        console.log(err);
    });

    let arr = {};
    for(let index in processedposts){
        let type = processedposts[index].post_type;
        arr[type] = arr[type] ? arr[type]+1 : 1;
    }
    let formats = [];
    for(let type in arr){
        formats.push({ origen: type, cantidad: arr[type], tipo: 'post_format' });
    }

    let sourcesMetrics = processedMetrics.filter(el => el.page_views_external_referrals != null);
    let externalSources = sourcesMetrics[0] ? sourcesMetrics[0].page_views_external_referrals.map(s=>{
        return { origen: s.key, cantidad: s.value, tipo: 'External' };
    }) : [];
    let internalSources = sourcesMetrics[0] ? sourcesMetrics[0].page_fans_by_like_source.map(s=>{
        return { origen: s.key, cantidad: s.value, tipo: 'Internal' };
    }) : [];

    let sources = [
        ...externalSources,
        ...internalSources,
        ...formats,
        { origen: '3s', cantidad: processedMetrics[0].page_video_views, tipo: 'video_views' },
        { origen: '10s', cantidad: processedMetrics[0].page_video_views_10s, tipo: 'video_views' },
        { origen: '95', cantidad: processedMetrics[0].page_video_views_30s, tipo: 'video_views' },
        { origen: 'paid', cantidad: processedMetrics[0].page_impressions_paid, tipo: 'post_speend' },
        { origen: 'organic', cantidad: processedMetrics[0].page_impressions_organic, tipo: 'post_speend' },
        { origen: 'viral', cantidad: processedMetrics[0].page_impressions_viral, tipo: 'post_speend' }
    ];
    return sources;
}