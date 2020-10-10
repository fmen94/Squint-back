import moment from "moment";
import { diffCalc } from "../../../helpers/common/diiffCalc";

export const readTopTrans = (data) => {

  let comparation = {
    fans_page: [],
    organic_fans: [],
    paid_fans: [],
    viral_fans: [],
    investment: [],
    engaged_users: [],
    unique_impressions: [],
    total_impressions: [],
    paid_impressions: [],
    organic_impressions: [],
    viral_impressions: [],
    engagemet_rate: [],
    total_engagement: [],
    paid_engagement: [],
    organic_engagement: [],
    viral_engagement: [],
    interactions: [],
    organic_post: [],
    paid_post: [],
    video_viwes: [],
  };
  let interactionsBar = [
    { kind: "reactions", valuesArray: [] },
    { kind: "shares", valuesArray: [] },
    { kind: "comments", valuesArray: [] },
    { kind: "clicks", valuesArray: [] },
  ];
  let dateValue = data.reduce(
    (obj, e, index) => {
      if(!obj.post_by_spend) obj.post_by_spend = [];
      let date = moment(e.row_date, "X").format("DD-MM-YYYYThh:mm:ss");
      if (index < 7) {
        obj.post_by_spend.push({
          kind:'organic',
          value: e.organic_post,
        });
        obj.post_by_spend.push({
          kind:'paid',
          value: e.paid_post,
        });
        obj.total_fans.push({
          date,
          value: e.total_fans,
        });
        obj.page_fans.push({
          date,
          value: e.page_fans,
        });
        obj.investment.push({
          date,
          value: e.investment,
        });
        obj.ad_impressions.push({
          date,
          value: e.ad_impressions,
        });
        obj.ad_reach.push({
          date,
          value: e.ad_reach,
        });
        obj.ad_interactions.push({
          date,
          value: e.ad_interactions,
        });
        obj.ad_frecuency.push({
          date,
          value: e.ad_frecuency,
        });
        obj.relevance_score.push({
          date,
          value: e.relevance_score,
        });
        obj.ctr.push({
          date,
          value: e.ctr,
        });
        obj.cpc.push({
          date,
          value: e.cpc,
        });
        obj.engagemet_rate.push({
          date,
          value: (e.total_engagement / e.reach) * 100,
        });
        obj.engaged_users.push({
          date,
          value: e.engaged_users,
        });
        obj.stories.push({
          date,
          value: e.stories,
        });
        obj.post_performance_ratio.push({
          date,
          value: e.post_performance_ratio,
        });
        obj.reactions.push({
          date,
          value: e.reactions,
        });
        obj.shares.push({
          date,
          value: e.shares,
        });
        obj.comments.push({
          date,
          value: e.comments,
        });
        obj.clicks.push({
          date,
          value: e.clicks,
        });
        obj.inbox_messages.push({
          date,
          value: e.inbox_messages,
        });
        obj.comp.fans_page.push({
          name: date,
          value: e.page_fans,
          diff: diffCalc(e.page_fans, data[index + 1].page_fans),
        });
        obj.comp.organic_fans.push({
          name: date,
          value: e.organic_fans,
          diff: diffCalc(e.organic_fans, data[index + 1].organic_fans),
        });
        obj.comp.paid_fans.push({
          name: date,
          value: e.paid_fans,
          diff: diffCalc(e.paid_fans, data[index + 1].paid_fans),
        });
        obj.comp.viral_fans.push({
          name: date,
          value: e.viral_fans,
          diff: diffCalc(e.viral_fans, data[index + 1].viral_fans),
        });
        obj.comp.investment.push({
          name: date,
          value: e.investment,
          diff: diffCalc(e.investment, data[index + 1].investment),
        });
        obj.comp.engaged_users.push({
          name: date,
          value: e.engaged_users,
          diff: diffCalc(e.engaged_users, data[index + 1].engaged_users),
        });
        obj.comp.unique_impressions.push({
          name: date,
          value: e.reach,
          diff: diffCalc(e.reach, data[index + 1].reach),
        });
        obj.comp.total_impressions.push({
          name: date,
          value: e.total_impressions,
          diff: diffCalc(
            e.total_impressions,
            data[index + 1].total_impressions
          ),
        });
        obj.comp.paid_impressions.push({
          name: date,
          value: e.paid_impressions,
          diff: diffCalc(e.paid_impressions, data[index + 1].paid_impressions),
        });
        obj.comp.organic_impressions.push({
          name: date,
          value: e.organic_impressions,
          diff: diffCalc(
            e.organic_impressions,
            data[index + 1].organic_impressions
          ),
        });
        obj.comp.viral_impressions.push({
          name: date,
          value: e.viral_impressions,
          diff: diffCalc(
            e.viral_impressions,
            data[index + 1].viral_impressions
          ),
        });
        obj.comp.engagemet_rate.push({
          name: date,
          value: e.engagemet_rate,
          diff: diffCalc(e.engagemet_rate,data[index + 1].engagemet_rate),
        });
        obj.comp.total_engagement.push({
          name: date,
          value: e.total_engagement,
          diff: diffCalc(e.total_engagement, data[index + 1].total_engagement),
        });
        obj.comp.paid_engagement.push({
          name: date,
          value: e.paid_engagement,
          diff: diffCalc(e.paid_engagement, data[index + 1].paid_engagement),
        });
        obj.comp.organic_engagement.push({
          name: date,
          value: e.organic_engagement,
          diff: diffCalc(
            e.organic_engagement,
            data[index + 1].organic_engagement
          ),
        });
        obj.comp.viral_engagement.push({
          name: date,
          value: e.viral_engagement,
          diff: diffCalc(e.viral_engagement, data[index + 1].viral_engagement),
        });
        obj.comp.interactions.push({
          name: date,
          value: e.interactions,
          diff: diffCalc(e.interactions, data[index + 1].interactions),
        });
        obj.comp.organic_post.push({
          name: date,
          value: e.organic_post,
          diff: diffCalc(e.organic_post, data[index + 1].organic_post),
        });
        obj.comp.paid_post.push({
          name: date,
          value: e.paid_post,
          diff: diffCalc(e.paid_post, data[index + 1].paid_post),
        });
        obj.comp.video_viwes.push({
          name: date,
          value: e.video_viwes,
          diff: diffCalc(e.video_viwes, data[index + 1].video_viwes),
        });
        obj.inter[0].valuesArray.push(e.interactions);
        obj.inter[1].valuesArray.push(e.shares);
        obj.inter[2].valuesArray.push(e.comments);
        obj.inter[3].valuesArray.push(e.clicks);
        obj.sentiment[0].valuesArray.push(e.sentiment_good);
        obj.sentiment[1].valuesArray.push(e.sentiment_bad);
        obj.sentimentTotal[0].value += e.sentiment_good;
        obj.sentimentTotal[1].value += e.sentiment_bad;
      } else {
        obj.sentimentTotal[2].value += e.sentiment_good;
        obj.sentimentTotal[3].value += e.sentiment_bad;
      }

      return obj;
    },
    {
      total_fans: [],
      page_fans: [],
      investment: [],
      ad_impressions: [],
      ad_reach: [],
      ad_interactions: [],
      ad_frecuency: [],
      relevance_score: [],
      ctr: [],
      cpc: [],
      engagemet_rate: [],
      engaged_users: [],
      stories: [],
      post_performance_ratio: [],
      reactions: [],
      shares: [],
      comments: [],
      clicks: [],
      inbox_messages: [],
      sentiment: [
        { kind: "good", valuesArray: [] },
        { kind: "bad", valuesArray: [] },
      ],
      sentimentTotal: [
        { kind: "good", value: 0 },
        { kind: "bad", value: 0 },
        { kind: "good_prev", value: 0 },
        { kind: "bad_prev", value: 0 },
      ],
      inter: interactionsBar,
      comp: comparation,
    }
  );
  let post_paid = 0;
  let post_organic = 0;
  dateValue.post_by_spend.forEach(element => {
    if(element.kind=='organic'){
      post_organic = post_organic+element.value;
    }
    if(element.kind=='paid'){
      post_paid = post_paid+element.value;
    }
  });
  return {
    generalInt01: data[0].engagemet_rate,
    generalInt02: data[0].affinity_rate,
    generalValuePrev01: {
      value: data[0].page_fans,
      diff: diffCalc(data[0].page_fans, data[7].page_fans),
    },
    generalValuePrev02: {
      value: data[0].reach,
      diff: diffCalc(data[0].reach, data[7].reach),
    },
    generalValuePrev03: {
      value: data[0].engaged_users,
      diff: diffCalc(data[0].engaged_users, data[7].engaged_users),
    },
    generalValuePrev04: {
      value: data[0].interactions,
      diff: diffCalc(data[0].interactions, data[7].interactions),
    },
    communitySmall01: {
      valueInt: data[0].total_fans,
      diff: diffCalc(data[0].total_fans, data[7].total_fans),
      valuesArray: dateValue.total_fans,
    },
    communitySmall02: {
      valueInt: data[0].page_fans,
      diff: diffCalc(data[0].page_fans, data[7].page_fans),
      valuesArray: dateValue.page_fans,
    },
    communityValuePrev02: {
      value: data[0].organic_fans,
      diff: diffCalc(data[0].organic_fans, data[7].organic_fans),
    },
    communityValuePrev03: {
      value: data[0].paid_fans,
      diff: diffCalc(data[0].paid_fans, data[7].paid_fans),
    },
    comparation: dateValue.comp,
    activitySmall01: {
      valueInt: data[0].investment,
      diff: diffCalc(data[0].investment, data[7].investment),
      valuesArray: dateValue.investment,
    },
    activitySmall02: {
      valueInt: data[0].ad_impressions,
      diff: diffCalc(data[0].ad_impressions, data[7].ad_impressions),
      valuesArray: dateValue.ad_impressions,
    },
    activitySmall03: {
      valueInt: data[0].ad_reach,
      diff: diffCalc(data[0].ad_reach, data[7].ad_reach),
      valuesArray: dateValue.ad_reach,
    },
    activitySmall04: {
      valueInt: data[0].ad_interactions,
      diff: diffCalc(data[0].ad_interactions, data[7].ad_interactions),
      valuesArray: dateValue.ad_interactions,
    },
    activitySmall05: {
      valueInt: data[0].ad_frecuency,
      diff: diffCalc(data[0].ad_frecuency, data[7].ad_frecuency),
      valuesArray: dateValue.ad_frecuency,
    },
    activitySmall06: {
      valueInt: data[0].relevance_score,
      diff: diffCalc(data[0].relevance_score, data[7].relevance_score),
      valuesArray: dateValue.relevance_score,
    },
    activitySmall07: {
      valueInt: data[0].ctr,
      diff: diffCalc(data[0].ctr, data[7].ctr),
      valuesArray: dateValue.ctr,
    },
    activitySmall08: {
      valueInt: data[0].cpc,
      diff: diffCalc(data[0].cpc, data[7].cpc),
      valuesArray: dateValue.cpc,
    },
    affinitySmall01: {
      valueInt: data[0].engagemet_rate,
      diff: diffCalc(data[0].engagemet_rate,data[7].engagemet_rate),
      valuesArray: dateValue.engagemet_rate,
    },
    affinitySmall02: {
      valueInt: data[0].engaged_users,
      diff: diffCalc(data[0].engaged_users, data[7].engaged_users),
      valuesArray: dateValue.engaged_users,
    },
    affinitySmall03: {
      valueInt: data[0].stories,
      diff: diffCalc(data[0].stories, data[7].stories),
      valuesArray: dateValue.stories,
    },
    affinitySmall04: {
      valueInt: data[0].post_performance_ratio,
      diff: diffCalc(
        data[0].post_performance_ratio,
        data[7].post_performance_ratio
      ),
      valuesArray: dateValue.post_performance_ratio,
    },
    affinitySmall05: {
      valueInt: data[0].reactions,
      diff: diffCalc(data[0].reactions, data[7].reactions),
      valuesArray: dateValue.reactions,
    },
    affinitySmall06: {
      valueInt: data[0].shares,
      diff: diffCalc(data[0].shares, data[7].shares),
      valuesArray: dateValue.shares,
    },
    affinitySmall07: {
      valueInt: data[0].comments,
      diff: diffCalc(data[0].comments, data[7].comments),
      valuesArray: dateValue.comments,
    },
    affinitySmall08: {
      valueInt: data[0].clicks,
      diff: diffCalc(data[0].clicks, data[7].clicks),
      valuesArray: dateValue.clicks,
    },
    conversationSmall01: {
      valueInt: data[0].comments,
      diff: diffCalc(data[0].comments, data[7].comments),
      valuesArray: dateValue.comments,
    },
    conversationSmall02: {
      valueInt: data[0].inbox_messages,
      diff: diffCalc(data[0].inbox_messages, data[7].inbox_messages),
      valuesArray: dateValue.inbox_messages,
    },
    affinityBar02: dateValue.inter,
    conversationBar01: dateValue.sentiment,
    conversationList02: dateValue.sentimentTotal,
    generalString01:
      dateValue.sentimentTotal[0].value >= dateValue.sentimentTotal[1].value
        ? "Good"
        : "Bad",
    affinityDonutDetail02: {
      title:'dummy',
      subtitle:'dummy',
      text:'dummy',
      valuesArray:[
        {
          kind:'organic',
          value: post_organic
        },
        {
          kind:'paid',
          value: post_paid
        }
      ]
    }
  };
};