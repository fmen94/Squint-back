import { CONTEXT, PERIODS } from "../../../interfaces/common";
import moment from 'moment';
import { UserInputError } from "apollo-server-express";

function rand(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
}
export const readBenchPostsSection = async (ctx:CONTEXT,limit:number) => {
    if(!ctx.id){
        throw new UserInputError("header - page_id");
    }

    const start = moment().unix();

    const lambda = ctx.lambda;

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

    let feedArray: any = [];
    await Promise.all([feedPromise]).then(r=>{
        feedArray = r[0];
    }).catch(err=>{
        console.log(err);
    });

    let page_ids = ctx.id.split(',');
    let results = [];
    for(let index in page_ids){
        let page_id = page_ids[index];
        let posts = feedArray.filter(f=>f.page_id==page_id);
        let frecuency = posts.length / 7;
        posts.forEach((p,i) => {
            posts[i].post_day = frecuency;
        });
        posts = posts.filter((elem,index,self)=>{
            let find = self.findIndex(e=>e.page_id == elem.page_id);
            if(index == find){
                return elem;
            }
        });
        results = [...results,...posts];
    }
    return results.map(r=>{
        return {
            id: r.page_id,
            post_image: r.post_image,
            name: r.post_author_name,
            bench_date: moment(r.post_timestamp,'X').toISOString(),
            bench_type: r.post_type,
            text: r.post_content,
            interactions: r.post_clicks||0,
            reactions: r.post_reactions_count,
            comentarios: r.post_comments_count,
            shares: r.post_shares_count,
            post_day: r.post_day
        }
    });
}