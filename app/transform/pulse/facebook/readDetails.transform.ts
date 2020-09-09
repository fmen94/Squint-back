export const readDetailsTrans = (data) => {
  data = Object.values(data).filter((r: any) => r.command === "FETCH");
  data = data[0].rows[0];
  return {
    generalinfo01: data.name + " " + data.country,
    generalValuePrev02: {
      value: data.today_reach,
      diff: data.yesterday_reach,
    },

    communityValuePrev01: {
      value: data.today_news_fans,
      diff: data.yesterday_news_fans,
    },
    communityValuePrev04: {
      value: data.today_lost_fans,
      diff: data.yesterday_lost_fans,
    },
  };
};
