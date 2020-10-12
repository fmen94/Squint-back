import { CONTEXT, PERIODS } from "../../../interfaces/common";
import moment from 'moment';
import { UserInputError } from "apollo-server-express";

function rand(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
}
export const readBenchTopSection = async (ctx:CONTEXT,start:number,period:PERIODS) => {
    if(!ctx.id){
        throw new UserInputError("header - page_id");
    }

    const lambda = ctx.lambda;

    let metricsPromise = lambda.invoke({
        FunctionName: 'squint_reader_fb_page_insights',
        Payload: JSON.stringify({
            page_id: ctx.id,
            start: start,
            daysBefore: 0
        })
    }).promise().then((data:any)=>{
        return JSON.parse(JSON.parse(data.Payload).body)
    });

    let pageInfoPromise = lambda.invoke({
        FunctionName: 'squint_reader_fb_page_info',
        Payload: JSON.stringify({
            page_id: ctx.id,
            start: start,
            daysBefore: 0
        })
    }).promise().then((data:any)=>{
        return JSON.parse(JSON.parse(data.Payload).body)
    });

    let feedPromise = lambda.invoke({
        FunctionName: 'squint_reader_fb_page_feed',
        Payload: JSON.stringify({
            page_id: ctx.id,
            start: start,
            daysBefore: 7
        })
    }).promise().then((data:any)=>{
        return JSON.parse(JSON.parse(data.Payload).body)
    });

    let processedMetrics: any = [];
    let pageInfoArray: any = [];
    let feedArray: any = [];
    await Promise.all([metricsPromise,pageInfoPromise,feedPromise]).then(r=>{
        processedMetrics = r[0];
        pageInfoArray = r[1];
        feedArray = r[2];
    }).catch(err=>{
        console.log(err);
    });

    //console.log(processedMetrics,processedMarketing);
    let pages = ctx.id.split(',');
    let result = [];
    let types = {};
    for(let index in pages){
        let page_id = pages[index];
        let pageInfo = pageInfoArray.filter(pi=>pi.page_id==page_id);
        let metrics = processedMetrics.filter(m=>m.page_id==page_id);
        let feed = feedArray.filter(m=>m.page_id==page_id);
        let video = 0;
        let image = 0;
        let text = 0;
        let bench_others = 0;
        let post_day = feed.length / 7;

        feed.forEach(post => {
            if(post.post_type=='video'){
                video = video + 1;
            }else if(post.post_type=='text_type'){
                text = text + 1;
            }else if(post.post_type=='photo'){
                image = image + 1;
            }else { 
                bench_others = bench_others + 1;
            }
        });

        types = {
            live: rand(9),
            video,
            image,
            text,
            bench_others,
            post_day,
            sentiment_good: rand(999),
            sentiment_bad: rand(999)
        }

        let date = moment(pageInfo[0].system_timestamp,'X').utc().format('YYYYMMDD');
        result.push({
            ...pageInfo.find(p=>{
                let dt = moment(p.system_timestamp,'X').utc().format('YYYYMMDD');
                if(dt===date){
                    return p;
                }
            }),
            ...metrics.find(m=>{
                let dt = moment(m.metric_timestamp,'X').utc().format('YYYYMMDD');
                if(dt===date){
                    delete m.system_timestamp;
                    delete m.metric_timestamp;
                    return m;
                }
            }),
            /*...marketing.find(m=>{
                let dt = moment(m.metric_timestamp,'X').utc().format('YYYYMMDD');
                if(dt===date){
                    delete m.system_timestamp;
                    delete m.metric_timestamp;
                    return m;
                }
            })*/
        });
    }
    return result.map(r=>{
        return { 
            bench_date: moment(r.system_timestamp,'X').toISOString(),
            id: r.page_id,
            name: r.page_name,
            username: r.page_alias,
            fans: r.page_fans||r.fan_count,
            interactions: r.page_post_engagements||0,
            engagemet_rate: ((r.page_post_engagements / r.page_fans) / 100)||0,
            share_of_voice: rand(99),
            clicks: r.page_clics||0,
            comments: r.page_positive_feedback_by_type ? r.page_positive_feedback_by_type.find(el => el.key == 'comment').value : 0,
            shares: r.page_positive_feedback_by_type ? r.page_positive_feedback_by_type.find(el => el.key == 'link').value : 0,
            reactions: r.page_reactions_total ? r.page_reactions_total.reduce((accumulator, currentValue)=>{
                return {key:'total', value: accumulator.value + currentValue.value }
            }).value : 0,
            ...types
        }
    });
}