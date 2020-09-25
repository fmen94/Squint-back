import moment from "moment";
import { diffCalc } from "../../../helpers/common/diiffCalc";

export const readTopIgTrans = (data) => {
  console.log(data);

  return data.reduce(
    (obj, e, index) => {
      let date = moment(e.row_date).format("DD-MM-YYYYThh:mm:ss");
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
          valueInt: e.reach,
          diff: diffCalc(e.reach, data[7].reach),
          valuesArray: [],
        };
        obj.activitySmall04 = {
          valueInt: e.followers,
          diff: diffCalc(e.followers, data[7].followers),
          valuesArray: [],
        };
        obj.activitySmall05 = {
          valueInt: e.followers,
          diff: diffCalc(e.followers, data[7].followers),
          valuesArray: [],
        };
        obj.activitySmall06 = {
          valueInt: e.followers,
          diff: diffCalc(e.followers, data[7].followers),
          valuesArray: [],
        };
        obj.activitySmall07 = {
          valueInt: e.followers,
          diff: diffCalc(e.followers, data[7].followers),
          valuesArray: [],
        };
        obj.activitySmall08 = {
          valueInt: e.followers,
          diff: diffCalc(e.followers, data[7].followers),
          valuesArray: [],
        };
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
      conversationBar01: [],
      conversationList02: [],
      conversationTitleText01: {},
      conversationTitleText02: {},
      conversationTitleText03: {},
      conversationString01: {},
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
