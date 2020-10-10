import moment from "moment";

export const postSectionTrans = (data) => {
  let result = data.reduce(
    (obj, e, index) => {
      obj.contentPost01.push({
        performance: "Good",
        pageName: e.page_name,
        pageImage: e.page_image,
        date: e.publication_date.toString(),
        type: e.type,
        text: e.text,
        mediaUrl: e.image,
        postUrl: e.url,
        impressions: e.impresions,
        reach: e.reach,
        interactions: e.interactions,
        like: e.like,
        love: e.love,
        care: e.care,
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
      obj.activityTable01.push([
        [
          { kind: "image", name: null, value: e.image },
          { kind: "text", name: null, value: e.text },
          { kind: "ad", name: null, value: e.promotion_status },
        ],
        [{ kind: "spend", name: "MXN", value: e.spend }],
        [{ kind: "impresions", name: null, value: e.impresions }],
        [{ kind: "video_views", name: null, value: e.video_views }],
        [{ kind: "reach", name: null, value: e.reach }],
        [{ kind: "frecuency", name: null, value: e.frecuency }],
        [{ kind: "interactions", name: null, value: e.interactions }],
        [{ kind: "clics", name: null, value: e.clics }],
        [{ kind: "ctr", name: null, value: e.ctr }],
        [{ kind: "cpc", name: null, value: e.cpc }],
      ]);
      obj.contentTable01.push([
        [
          { kind: "date", name: null, value: e.publication_date.toString() },
          { kind: "image", name: null, value: e.image },
          { kind: "text", name: null, value: e.text },
          { kind: "type", name: null, value: e.type },
        ],
        [{ kind: "impresions", name: null, value: e.impresions }],
        [{ kind: "reach", name: null, value: e.reach }],
        [{ kind: "engaged_users", name: null, value: e.engaged_users }],
        [{ kind: "engagemet_rate", name: null, value: e.engagemet_rate }],
        [
          {
            kind: "negative_feedbacks",
            name: null,
            value: e.negative_feedbacks,
          },
        ],
        [{ kind: "interactions", name: null, value: e.interactions }],
        [{ kind: "reactions", name: null, value: e.reactions }],
        [{ kind: "shared", name: null, value: e.shared }],
        [{ kind: "clics", name: null, value: e.clics }],
        [{ kind: "comments", name: null, value: e.comments }],
        [
          {
            kind: "negative_feedbacks",
            name: null,
            value: e.negative_feedbacks,
          },
        ],
      ]);
      return obj;
    },
    {
      contentPost01: [],
      affinityBubbles01: [],
      activityTable01: [],
      contentTable01: [],
    }
  );
  /*result.contentTable01.forEach(element => {
    console.log(element);
  });*/
  return result;
};
