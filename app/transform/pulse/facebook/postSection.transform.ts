import moment from "moment";

export const postSectionTrans = (data) => {
  data = Object.values(data).filter((r: any) => r.command === "FETCH");
  data = data[0].rows;
  return data.reduce(
    (obj, e, index) => {
      obj.contentPost01.push({
        performance: "Good",
        pageName: e.page_name,
        pageImage: e.page_image,
        date: e.publication_date.toString(),
        type: e.type,
        text: e.text,
        mediaUrl: e.image,
        postUrl: null,
        impressions: e.impresions,
        reach: e.reach,
        interactions: e.interactions,
        like: e.like,
        love: e.love,
        care: null,
        haha: e.haha,
        wow: e.woow,
        sad: e.sad,
        angry: e.angry,
        comments: e.comments,
        clicks: e.clics,
        shares: e.shared,
        feedbacks: e.negative_feedbacks,
      });
      obj.affinityBubbles01.push({
        kind: e.type,
        date: e.publication_date.toString(),
        value: e.reach,
      });
      return obj;
    },
    {
      contentPost01: [],
      affinityBubbles01: [],
    }
  );
};
