import { diffCalc } from "../../../helpers/common/diiffCalc";

export const readDetailsTrans = (data) => {
  data = data[0];
  return {
    generalinfo01: data.name + " " + data.country,
    generalValuePrev02: {
      value: data.today_reach,
      diff: diffCalc(data.today_reach, data.yesterday_reach),
    },

    communityValuePrev01: {
      value: data.today_news_fans,
      diff: diffCalc(data.today_news_fans, data.yesterday_news_fans),
    },
    communityValuePrev04: {
      value: data.today_lost_fans,
      diff: diffCalc(data.today_lost_fans, data.yesterday_lost_fans),
    },
  };
};
