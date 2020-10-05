import moment from "moment";
import { diffCalc } from "../../../helpers/common/diiffCalc";

export const readTopIgTrans = (data) => {
  console.log(data);

  return data.reduce(
    (obj, e, index) => {
      let date = moment(e.row_date,'X').format("DD-MM-YYYYThh:mm:ss");
      if (index == 0) {
        (obj.generalInt01 = e.engagemet_rate),
          (obj.generalInt02 = "7.5"), //pendiente de formula de afinidad
          (obj.generalString01 = "Good"); //pendiente
        obj.generalValuePrev01 = {
          value: e.followers,
          diff: diffCalc(e.followers, data[7].followers),
        };
        obj.generalValuePrev02 = {
          value: e.reach,
          diff: diffCalc(e.reach, data[7].reach),
        };
        obj.generalValuePrev03 = {
          value: e.views,
          diff: diffCalc(e.views, data[7].views),
        };
        obj.generalValuePrev04 = {
          value: e.interactions,
          diff: diffCalc(e.interactions, data[7].interactions),
        };
        obj.communitySmall01 = {
          valueInt: e.followers,
          diff: diffCalc(e.followers, data[7].followers),
          valuesArray: [],
        };
        obj.communitySmall01 = {
          valueInt: e.followers,
          diff: diffCalc(e.followers, data[7].followers),
          valuesArray: [],
        };
        obj.communitySmall02 = {
          valueInt: e.following,
          diff: diffCalc(e.following, data[7].following),
          valuesArray: [],
        };
        obj.communityValuePrev01 = {
          value: e.new_followers,
          diff: diffCalc(e.new_followers, data[7].new_followers),
        };
        obj.communityValuePrev02 = {
          value: e.online_followers,
          diff: diffCalc(e.online_followers, data[7].online_followers),
        };
        obj.activitySmall01 = {
          valueInt: e.spend,
          diff: diffCalc(e.spend, data[7].spend),
          valuesArray: [],
        };
        obj.activitySmall02 = {
          valueInt: e.total_impressions,
          diff: diffCalc(e.total_impressions, data[7].total_impressions),
          valuesArray: [],
        };
        obj.activitySmall03 = {
          valueInt: e.ad_reach,
          diff: diffCalc(e.ad_reach, data[7].ad_reach),
          valuesArray: [],
        };
        obj.activitySmall04 = {
          valueInt: e.ad_interactions,
          diff: diffCalc(e.ad_interactions, data[7].ad_interactions),
          valuesArray: [],
        };
        obj.activitySmall05 = {
          valueInt: e.ad_frecuency,
          diff: diffCalc(e.ad_frecuency, data[7].ad_frecuency),
          valuesArray: [],
        };
        obj.activitySmall06 = {
          valueInt: e.relevance_score,
          diff: diffCalc(e.relevance_score, data[7].relevance_score),
          valuesArray: [],
        };
        obj.activitySmall07 = {
          valueInt: e.ctr,
          diff: diffCalc(e.ctr, data[7].ctr),
          valuesArray: [],
        };
        obj.activitySmall08 = {
          valueInt: e.cpc,
          diff: diffCalc(e.cpc, data[7].cpc),
          valuesArray: [],
        };
        obj.affinitySmall01 = {
          valueInt: e.engagemet_rate,
          diff: diffCalc(e.engagemet_rate, data[7].engagemet_rate),
          valuesArray: [],
        };
        obj.affinitySmall02 = {
          valueInt: e.online_followers,
          diff: diffCalc(e.online_followers, data[7].online_followers),
          valuesArray: [],
        };
        obj.affinitySmall03 = {
          valueInt: e.saves,
          diff: diffCalc(e.saves, data[7].saves),
          valuesArray: [],
        };
        obj.affinitySmall04 = {
          valueInt: e.interactions,
          diff: diffCalc(e.interactions, data[7].interactions),
          valuesArray: [],
        };
        obj.affinitySmall05 = {
          valueInt: e.carrusel_views,
          diff: diffCalc(e.carrusel_views, data[7].carrusel_views),
          valuesArray: [],
        };
        obj.affinitySmall06 = {
          valueInt: e.carrusel_outputs,
          diff: diffCalc(e.carrusel_outputs, data[7].carrusel_outputs),
          valuesArray: [],
        };
        obj.affinitySmall07 = {
          valueInt: e.shered_taps,
          diff: diffCalc(e.shered_taps, data[7].shered_taps),
          valuesArray: [],
        };
        obj.affinitySmall08 = {
          valueInt: e.tap_views,
          diff: diffCalc(e.tap_views, data[7].tap_views),
          valuesArray: [],
        };
        obj.conversationSmall01 = {
          valueInt: e.comments,
          diff: diffCalc(e.comments, data[7].comments),
          valuesArray: [],
        };
        obj.conversationSmall02 = {
          valueInt: e.clicks,
          diff: diffCalc(e.clicks, data[7].clicks),
          valuesArray: [],
        };
        obj.conversationSmall03 = {
          valueInt: e.shares,
          diff: diffCalc(e.shares, data[7].shares),
          valuesArray: [],
        };
        obj.conversationSmall04 = {
          valueInt: e.saved,
          diff: diffCalc(e.saved, data[7].saved),
          valuesArray: [],
        };
        obj.conversationList02[0].value = e.sentiment_good;
        obj.conversationList02[1].value = e.sentiment_bad;
        obj.conversationList02[2].value = diffCalc(
          e.sentiment_good,
          data[7].sentiment_good
        );
        obj.conversationList02[3].value = diffCalc(
          e.sentiment_bad,
          data[7].sentiment_bad
        );
      }
      if (index < 7) {
        obj.communitySmall01.valuesArray.push({
          date,
          value: e.followers,
        });
        obj.communitySmall02.valuesArray.push({
          date,
          value: e.following,
        });
        obj.activitySmall01.valuesArray.push({
          date,
          value: e.spend,
        });
        obj.activitySmall02.valuesArray.push({
          date,
          value: e.total_impressions,
        });
        obj.activitySmall03.valuesArray.push({
          date,
          value: e.ad_reach,
        });
        obj.activitySmall04.valuesArray.push({
          date,
          value: e.ad_interactions,
        });
        obj.activitySmall05.valuesArray.push({
          date,
          value: e.ad_frecuency,
        });
        obj.activitySmall06.valuesArray.push({
          date,
          value: e.relevance_score,
        });
        obj.activitySmall07.valuesArray.push({
          date,
          value: e.ctr,
        });
        obj.activitySmall08.valuesArray.push({
          date,
          value: e.cpc,
        });
        obj.affinitySmall01.valuesArray.push({
          date,
          value: e.engagemet_rate,
        });
        obj.affinitySmall02.valuesArray.push({
          date,
          value: e.online_followers,
        });
        obj.affinitySmall03.valuesArray.push({
          date,
          value: e.saves,
        });
        obj.affinitySmall04.valuesArray.push({
          date,
          value: e.interactions,
        });
        obj.affinitySmall05.valuesArray.push({
          date,
          value: e.carrusel_views,
        });
        obj.affinitySmall06.valuesArray.push({
          date,
          value: e.carrusel_outputs,
        });
        obj.affinitySmall07.valuesArray.push({
          date,
          value: e.shered_taps,
        });
        obj.affinitySmall08.valuesArray.push({
          date,
          value: e.tap_views,
        });
        obj.conversationSmall01.valuesArray.push({
          date,
          value: e.comments,
        });
        obj.conversationSmall02.valuesArray.push({
          date,
          value: e.clicks,
        });
        obj.conversationSmall03.valuesArray.push({
          date,
          value: e.shares,
        });
        obj.conversationSmall04.valuesArray.push({
          date,
          value: e.saved,
        });
        obj.conversationBar01[0].valuesArray.push(e.sentiment_good);
        obj.conversationBar01[1].valuesArray.push(e.sentiment_bad);
        obj.comparation.followers.push({
          name: date,
          value: e.followers,
          diff: diffCalc(e.followers, data[index + 1].followers),
        });
        obj.comparation.post.push({
          name: date,
          value: e.publicaciones,
          diff: diffCalc(e.publicaciones, data[index + 1].publicaciones),
        });
        obj.comparation.online_followers.push({
          name: date,
          value: e.online_followers,
          diff: diffCalc(e.online_followers, data[index + 1].online_followers),
        });
        obj.comparation.views.push({
          name: date,
          value: e.views,
          diff: diffCalc(e.views, data[index + 1].views),
        });
        obj.comparation.impressions.push({
          name: date,
          value: e.impressions,
          diff: diffCalc(e.impressions, data[index + 1].impressions),
        });
        obj.comparation.reach.push({
          name: date,
          value: e.reach,
          diff: diffCalc(e.reach, data[index + 1].reach),
        });
        obj.comparation.interactions.push({
          name: date,
          value: e.interactions,
          diff: diffCalc(e.interactions, data[index + 1].interactions),
        });
        obj.comparation.spend.push({
          name: date,
          value: e.spend,
          diff: diffCalc(e.spend, data[index + 1].spend),
        });
        obj.comparation.engagemet_rate.push({
          name: date,
          value: e.engagemet_rate,
          diff: diffCalc(e.engagemet_rate, data[index + 1].engagemet_rate),
        });
        obj.comparation.engagement.push({
          name: date,
          value: e.engagement,
          diff: diffCalc(e.engagement, data[index + 1].engagement),
        });
        obj.comparation.engaged_users.push({
          name: date,
          value: e.engaged_users,
          diff: diffCalc(e.engaged_users, data[index + 1].engaged_users),
        });
        obj.comparation.saves.push({
          name: date,
          value: e.saves,
          diff: diffCalc(e.saves, data[index + 1].saves),
        });
      }
      if (index == 7) {
        obj.generalString01 =
          obj.conversationList02[0].value > obj.conversationList02[1].value
            ? "good"
            : "bad";
      }

      return obj;
    },
    {
      generalInt01: "",
      generalInt02: "",
      generalString01: "",
      generalValuePrev01: {},
      generalValuePrev02: {},
      generalValuePrev03: {},
      generalValuePrev04: {},
      communitySmall01: {},
      communitySmall02: {},
      communityValuePrev01: {},
      communityValuePrev02: {},
      //communityComp01: [],
      activitySmall01: {},
      activitySmall02: {},
      activitySmall03: {},
      activitySmall04: {},
      //activityComp01: [],
      activitySmall05: {},
      activitySmall06: {},
      activitySmall07: {},
      activitySmall08: {},
      affinitySmall01: {},
      affinitySmall02: {},
      affinitySmall03: {},
      affinitySmall04: {},
      //affinityComp01: [],
      affinitySmall05: {},
      affinitySmall06: {},
      affinitySmall07: {},
      affinitySmall08: {},
      //affinityComp02: [],
      //affinityComp03: [],
      conversationSmall01: {},
      conversationSmall02: {},
      conversationSmall03: {},
      conversationSmall04: {},
      conversationBar01: [
        { kind: "good", valuesArray: [] },
        { kind: "bad", valuesArray: [] },
      ],
      conversationList02: [
        { kind: "good", value: 0 },
        { kind: "bad", value: 0 },
        { kind: "good_prev", value: 0 },
        { kind: "bad_prev", value: 0 },
      ],
      comparation: {
        followers: [],
        post: [],
        online_followers: [],
        views: [],
        impressions: [],
        reach: [],
        interactions: [],
        spend: [],
        engagemet_rate: [],
        engagement: [],
        engaged_users: [],
        saves: [],
      },
    }
  );
};
