import moment from "moment";
import { diffCalc } from "../../../helpers/common/diiffCalc";

export const readTopYtTrans = (data) => {
  //console.log(data);
  return data.reduce(
    (obj, e, index) => {
      let date = moment(e.row_date).format("DD-MM-YYYYThh:mm:ss");
      if (index == 0) {
        (obj.generalInt01 = e.engagemet_rate),
          (obj.generalInt02 = "7.5"), //pendiente de formula de afinidad
          (obj.generalString01 = "Good"); //pendiente
        obj.generalValuePrev01 = {
          value: e.views,
          diff: diffCalc(e.views, data[7].views),
        };
        obj.generalValuePrev02 = {
          value: e.suscribers,
          diff: diffCalc(e.suscribers, data[7].suscribers),
        };
        obj.generalValuePrev03 = {
          value: e.video_count,
          diff: diffCalc(e.video_count, data[7].video_count),
        };
        obj.generalValuePrev04 = {
          value: e.minutes_viewed,
          diff: diffCalc(e.minutes_viewed, data[7].minutes_viewed),
        };
        obj.communitySmall01 = {
          valueInt: e.suscribers,
          diff: diffCalc(e.suscribers, data[7].suscribers),
          valuesArray: [],
        };
        obj.communitySmall02 = {
          valueInt: e.view_rate,
          diff: diffCalc(e.view_rate, data[7].view_rate),
          valuesArray: [],
        };
        obj.communityValuePrev01 = {
          value: e.new_suscribers,
          diff: diffCalc(e.new_suscribers, data[7].new_suscribers),
        };
        obj.communityValuePrev02 = {
          value: e.new_unsuscribers,
          diff: diffCalc(e.new_unsuscribers, data[7].new_unsuscribers),
        };
        obj.activitySmall01 = {
          valueInt: e.inversión,
          diff: diffCalc(e.inversión, data[7].inversión),
          valuesArray: [],
        };
        obj.activitySmall02 = {
          valueInt: e.ad_impressions,
          diff: diffCalc(e.ad_impressions, data[7].ad_impressions),
          valuesArray: [],
        };
        obj.activitySmall03 = {
          valueInt: e.conversions,
          diff: diffCalc(e.conversions, data[7].conversions),
          valuesArray: [],
        };
        obj.activitySmall04 = {
          valueInt: e.engagement,
          diff: diffCalc(e.engagement, data[7].engagement),
          valuesArray: [],
        };
        obj.activitySmall05 = {
          valueInt: e.clicks,
          diff: diffCalc(e.clicks, data[7].clicks),
          valuesArray: [],
        };
        obj.activitySmall06 = {
          valueInt: e.cpv,
          diff: diffCalc(e.cpv, data[7].cpv),
          valuesArray: [],
        };
        obj.activitySmall07 = {
          valueInt: e.cpc,
          diff: diffCalc(e.cpc, data[7].cpc),
          valuesArray: [],
        };
        obj.activitySmall08 = {
          valueInt: e.ctr,
          diff: diffCalc(e.ctr, data[7].ctr),
          valuesArray: [],
        };
        obj.affinitySmall01 = {
          valueInt: e.engagemet_rate,
          diff: diffCalc(e.engagemet_rate, data[7].engagemet_rate),
          valuesArray: [],
        };
        obj.affinitySmall02 = {
          valueInt: e.favorites,
          diff: diffCalc(e.favorites, data[7].favorites),
          valuesArray: [],
        };
        obj.affinitySmall03 = {
          valueInt: e.views,
          diff: diffCalc(e.views, data[7].views),
          valuesArray: [],
        };
        obj.affinitySmall04 = {
          valueInt: e.minutes_viewed,
          diff: diffCalc(e.minutes_viewed, data[7].minutes_viewed),
          valuesArray: [],
        };
        obj.affinitySmall05 = {
          valueInt: e.likes,
          diff: diffCalc(e.likes, data[7].likes),
          valuesArray: [],
        };
        obj.affinitySmall06 = {
          valueInt: e.unlikes,
          diff: diffCalc(e.unlikes, data[7].unlikes),
          valuesArray: [],
        };
        obj.affinitySmall07 = {
          valueInt: e.comments,
          diff: diffCalc(e.comments, data[7].comments),
          valuesArray: [],
        };
        obj.affinitySmall08 = {
          valueInt: e.shares,
          diff: diffCalc(e.shares, data[7].shares),
          valuesArray: [],
        };
        obj.conversationSmall01 = {
          valueInt: e.comments,
          diff: diffCalc(e.comments, data[7].comments),
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
        obj.conversationList02[4].value = e.clicks;
        obj.conversationList02[5].value = e.comments;
        obj.conversationList02[6].value = e.conversions;
        obj.conversationList02[7].value = e.shares;
        obj.conversationList02[8].value = e.favorites;
        obj.conversationList02[9].value = e.likes;
        obj.conversationList02[10].value = e.unlikes;
        obj.conversationList02[11].value = e.new_unsuscribers; //pendiente en el sp
      }
      if (index < 7) {
        obj.communitySmall01.valuesArray.push({
          date,
          value: e.suscribers,
        });
        obj.communitySmall02.valuesArray.push({
          date,
          value: e.view_rate,
        });
        obj.activitySmall01.valuesArray.push({
          date,
          value: e.inversión,
        });
        obj.activitySmall02.valuesArray.push({
          date,
          value: e.ad_impressions,
        });
        obj.activitySmall03.valuesArray.push({
          date,
          value: e.conversions,
        });
        obj.activitySmall04.valuesArray.push({
          date,
          value: e.engagement,
        });
        obj.activitySmall05.valuesArray.push({
          date,
          value: e.clicks,
        });
        obj.activitySmall06.valuesArray.push({
          date,
          value: e.cpv,
        });
        obj.activitySmall07.valuesArray.push({
          date,
          value: e.cpc,
        });
        obj.activitySmall08.valuesArray.push({
          date,
          value: e.ctr,
        });
        obj.affinitySmall01.valuesArray.push({
          date,
          value: e.engagemet_rate,
        });
        obj.affinitySmall02.valuesArray.push({
          date,
          value: e.favorites,
        });
        obj.affinitySmall03.valuesArray.push({
          date,
          value: e.views,
        });
        obj.affinitySmall04.valuesArray.push({
          date,
          value: e.minutes_viewed,
        });
        obj.affinitySmall05.valuesArray.push({
          date,
          value: e.likes,
        });
        obj.affinitySmall06.valuesArray.push({
          date,
          value: e.unlikes,
        });
        obj.affinitySmall07.valuesArray.push({
          date,
          value: e.comments,
        });
        obj.affinitySmall08.valuesArray.push({
          date,
          value: e.shares,
        });
        obj.conversationSmall01.valuesArray.push({
          date,
          value: e.comments,
        });
        obj.conversationBar01[0].valuesArray.push(e.sentiment_good);
        obj.conversationBar01[1].valuesArray.push(e.sentiment_bad);
        obj.comparation.suscribers.push({
          name: date,
          value: e.suscribers,
          diff: diffCalc(e.suscribers, data[index + 1].suscribers),
        });
        obj.comparation.impressions.push({
          name: date,
          value: e.ad_impressions,
          diff: diffCalc(e.ad_impressions, data[index + 1].ad_impressions),
        });
        obj.comparation.conversions.push({
          name: date,
          value: e.conversions,
          diff: diffCalc(e.conversions, data[index + 1].conversions),
        });
        obj.comparation.views.push({
          name: date,
          value: e.views,
          diff: diffCalc(e.views, data[index + 1].views),
        });
        obj.comparation.minutes_viewed.push({
          name: date,
          value: e.minutes_viewed,
          diff: diffCalc(e.minutes_viewed, data[index + 1].minutes_viewed),
        });
        obj.comparation.engagemet_rate.push({
          name: date,
          value: e.engagemet_rate,
          diff: diffCalc(e.engagemet_rate, data[index + 1].engagemet_rate),
        });
        obj.comparation.inversión.push({
          name: date,
          value: e.inversión,
          diff: diffCalc(e.inversión, data[index + 1].inversión),
        });
        obj.comparation.interactions.push({
          name: date,
          value: e.ad_interactions,
          diff: diffCalc(e.ad_interactions, data[index + 1].ad_interactions),
        });
        obj.comparation.engagement.push({
          name: date,
          value: e.engagement,
          diff: diffCalc(e.engagement, data[index + 1].engagement),
        });
        obj.comparation.likes.push({
          name: date,
          value: e.likes,
          diff: diffCalc(e.likes, data[index + 1].likes),
        });
        obj.comparation.comments.push({
          name: date,
          value: e.comments,
          diff: diffCalc(e.comments, data[index + 1].comments),
        });
        obj.comparation.shares.push({
          name: date,
          value: e.shares,
          diff: diffCalc(e.shares, data[index + 1].shares),
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
      activitySmall01: {},
      activitySmall02: {},
      activitySmall03: {},
      activitySmall04: {},
      activitySmall05: {},
      activitySmall06: {},
      activitySmall07: {},
      activitySmall08: {},
      affinitySmall01: {},
      affinitySmall02: {},
      affinitySmall03: {},
      affinitySmall04: {},
      affinitySmall05: {},
      affinitySmall06: {},
      affinitySmall07: {},
      affinitySmall08: {},
      conversationSmall01: {},
      conversationBar01: [
        { kind: "good", valuesArray: [] },
        { kind: "bad", valuesArray: [] },
      ],
      conversationList02: [
        { kind: "good", value: 0 },
        { kind: "bad", value: 0 },
        { kind: "good_prev", value: 0 },
        { kind: "bad_prev", value: 0 },
        { kind: "clicks", value: 0 },
        { kind: "comments", value: 0 },
        { kind: "conversions", value: 0 },
        { kind: "shares", value: 0 },
        { kind: "favorites", value: 0 },
        { kind: "likes", value: 0 },
        { kind: "unlike", value: 0 },
        { kind: "unsubscribe", value: 0 },
      ],
      comparation: {
        suscribers: [],
        impressions: [],
        conversions: [],
        views: [],
        minutes_viewed: [],
        engagemet_rate: [],
        inversión: [],
        interactions: [],
        engagement: [],
        likes: [],
        comments: [],
        shares: [],
      },
    }
  );
};
