import { CONTEXT, PERIODS } from "../../../interfaces/common";
import moment from 'moment';
import { DynamoDB } from "aws-sdk";
import { MarketingResponse, ReadTopSectionPageInfoResponse, ReadTopSectionResponse } from "../../../interfaces/pulse/facebook";
import { parseResponse } from "../../../helpers/common/parseResults.helper";
import { UserInputError } from "apollo-server-express";

function rand(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
}
export const readTopSection = async (ctx:CONTEXT,start:number,period:PERIODS) => {
    if(!ctx.id){
        throw new UserInputError("header - page_id");
    }
    /*let years:Array<any> = [moment(end,'X').format('YYYY')];
    let months:Array<any> = [moment(end,'X').format('MM')];
    let days:Array<any> = [moment(end,'X').format('DD')];
    let e = end;
    let s = start;
    while(e<s){
        let d = moment(e,'X').add(1,'day');
        let yfound = years.indexOf(d.format('YYYY'))===-1 ? false : true;
        if(!yfound){
            years.push(d.format('YYYY'));
        }
        let mfound = months.indexOf(d.format('MM'))===-1 ? false : true;
        if(!mfound){
            months.push(d.format('MM'));
        }
        let dfound = days.indexOf(d.format('DD'))===-1 ? false : true;
        if(!dfound){
            days.push(d.format('DD'));
        }
        e=d.unix();
    }
    years = years.map(y=>Number(y));
    months = months.map(m=>Number(m));
    days = days.map(d=>Number(d));

    let yearExpArray:any = years.map(y=>`:year${y}`);
    let monthExpArray:any = months.map(m=>`:month${m}`);
    let dayExpArray:any = days.map(d=>`:day${d}`);

    let yearExp = yearExpArray.join(',');
    let monthExp = monthExpArray.join(',');
    let dayExp = dayExpArray.join(',');

    yearExpArray = yearExpArray.map(y=>{
        let obj = {};
        obj[y] = {'N':y.replace(':year','')}
        return obj;
    });
    monthExpArray = monthExpArray.map(m=>{
        let obj = {};
        obj[m] = {'N':m.replace(':month','')}
        return obj;
    });
    dayExpArray = dayExpArray.map(d=>{
        let obj = {};
        obj[d] = {'N':d.replace(':day','')}
        return obj;
    });
    let filters = [...yearExpArray,...monthExpArray,...dayExpArray];
    let filtersObject:any = {};
    for(let x=0; x<filters.length; x++){
        let filter = filters[x];
        filtersObject = {
            ...filtersObject,
            ...filter
        }
    }*/

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
    }).catch(err=>{
        console.log(err);
        return null;
    });

    console.log(metricsPromise);

    let pageInfoPromise = lambda.invoke({
        FunctionName: 'squint_reader_fb_page_info',
        Payload: JSON.stringify({
            page_id: ctx.id,
            start: start,
            daysBefore: 10
        })
    }).promise().then((data:any)=>{
        return JSON.parse(JSON.parse(data.Payload).body)
    });

    let pageMarketingPromise = lambda.invoke({
        FunctionName: 'squint_reader_fb_marketing_insights',
        Payload: JSON.stringify({
            page_id: ctx.id,
            start: start,
            daysBefore: 10
        })
    }).promise().then((data:any)=>{
        return JSON.parse(JSON.parse(data.Payload).body)
    });
    
    let processedMetrics: any = [];
    let pageInfoArray: any = [];
    let processedMarketing: any = [];
    await Promise.all([metricsPromise,pageInfoPromise,pageMarketingPromise]).then(r=>{
        processedMetrics = r[0];
        pageInfoArray = r[1];
        processedMarketing = r[2];
        console.log(processedMetrics.length,pageInfoArray.length,processedMarketing.length);
    }).catch(err=>{
        console.log(err);
    });

    processedMetrics = processedMetrics.filter(pm=>pm.metric_timestamp>9999999).map((vme,i,s)=>{
        let mDate = moment(vme.metric_timestamp,'X').format('YYYYMMDD');
        let marketing = processedMarketing.find((vmk,i,s)=>{
            let markDate = moment(vmk.metric_timestamp,'X').format('YYYYMMDD');
            if(markDate===mDate){
                return vmk;
            }
        });
        let pageInfo = pageInfoArray.find((vpi,i,s)=>{
            let piDate = moment(vpi.system_timestamp,'X').format('YYYYMMDD');
            if(piDate===mDate){
                return vpi;
            }
        });
        return {
            ...vme,
            ...marketing,
            page_global_fans: pageInfo ? pageInfo.global_account.fans : -1
        };
    });

    let response = [];
    for(let x = 0; x<processedMetrics.length; x++){
        let metric = processedMetrics[x];
        let viral_fans = metric.page_fans_by_like_source===null ? [] : metric.page_fans_by_like_source.filter(s=>{
            if(s.key == 'News Feed' || s.key == 'Page Suggestions'){
                return s;
            }
        });
        //.toFixed(20).match(/^-?\d*\.?0*\d{0,2}/)[0]
        response.push({
            engagemet_rate: ((metric.page_post_engagements / metric.page_fans) * 100)||0,
            affinity_rate: rand(9).toFixed(20),
            page_fans: metric.page_fans,
            total_fans: metric.page_global_fans,
            engaged_users: metric.page_engaged_users,
            interactions: metric.page_post_engagements,
            row_date: metric.metric_timestamp,
            fans_page: metric.page_fans,
            organic_fans: metric.page_fans_organic,
            paid_fans: metric.page_fans_organic,
            viral_fans: !viral_fans.length ? 0 : viral_fans.reduce((accumulator, currentValue)=>{
                return {key:'total', value: accumulator.value + currentValue.value }
            }).value,
            investment: metric.spend||0,
            total_impressions: metric.page_impressions,
            paid_impressions: metric.page_impressions_paid,
            organic_impressions: metric.page_impressions_organic,
            viral_impressions: metric.page_impressions_viral,
            total_engagement: metric.page_post_engagements,
            paid_engagement: ((metric.page_impressions_paid / metric.page_post_engagements) * 100),
            organic_engagement: ((metric.page_impressions_organic / metric.page_post_engagements) * 100),
            viral_engagement: ((metric.page_impressions_viral / metric.page_post_engagements) * 100),
            ad_impressions: metric.impressions||0,
            ad_reach: metric.reach||0,
            ad_interactions: metric.actions && metric.actions.length ? metric.actions.reduce((accumulator, currentValue)=>{
                return { action_type:'total', value: accumulator.value + currentValue.value }
            }).value : 0,
            ad_frecuency: metric.frequency||0,
            relevance_score: metric.impressions && metric.spend ? ((metric.spend / metric.impressions) * 100) : 0,
            ctr: metric.ctr||0,
            cpc: metric.cpc||0,
            stories: metric.page_content_activity,
            post_performance_ratio: ((metric.page_post_engagements / metric.page_impressions_unique) * 100),
            reactions: metric.page_reactions_total.reduce((accumulator, currentValue)=>{
                return {key:'total', value: accumulator.value + currentValue.value }
            }).value,
            shares: metric.page_positive_feedback_by_type.find(el => el.key == 'link').value,
            comments: metric.page_positive_feedback_by_type.find(el => el.key == 'comment').value,
            clicks: metric.page_clics,
            organic_post: rand(9),
            paid_post: rand(9),
            video_viwes: metric.page_video_views,
            inbox_messages: metric.page_message_count,
            reach: metric.page_impressions_unique,
            sentiment_good: rand(999),
            sentiment_bad: rand(999)
        })
    }
    let data = response.sort((a:any,b:any)=> {
        if(a.row_date > b.row_date){
            return -1;   
        }
        if(a.row_date < b.row_date){
            return 1;   
        }
        return 0;
    });
    return data;
}