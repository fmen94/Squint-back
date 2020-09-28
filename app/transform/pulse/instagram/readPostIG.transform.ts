export const postIgTrans = (data) => {
  //console.log(data);
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
        postUrl: e.url,
        impressions: e.impresions,
        reach: e.reach,
        engagementRate: e.engagemet_rate,
        interactions: e.interactions,
        views: e.video_views,
        clicks: e.clicks,
        shares: e.shared,
        saved: e.saved,
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
        [{ kind: "clicks", name: null, value: e.clicks }],
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
        [{ kind: "engagemet_rate", name: null, value: e.engagemet_rate }],
        [{ kind: "interactions", name: null, value: e.interactions }],
        [{ kind: "views", name: null, value: e.video_views }],
        [{ kind: "comments", name: null, value: e.comments }],
        [{ kind: "clicks", name: null, value: e.clicks }],
        [{ kind: "share", name: null, value: e.shared }],
        [{ kind: "saved", name: null, value: e.saved }],
        [{ kind: "affinity_rate", name: null, value: e.affinity_rate }],
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
};
