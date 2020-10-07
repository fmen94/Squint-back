export const postYtTrans = (data) => {
  //console.log(data);
  return data.reduce(
    (obj, e, index) => {
      obj.contentPost01.push({
        performance: "Good",
        pageName: e.page_name,
        pageImage: e.page_image,
        date: e.publication_date.toString(),
        type: e.type,
        title: e.title,
        text: e.text,
        mediaUrl: e.image,
        postUrl: e.url,
        interactions: e.interactions,
        favorites: e.favorites,
        likes: e.likes,
        comments: e.comments,
        shares: e.shared,
        unlikes: e.unlikes,
      });
      obj.activityTable01.push([
        [
          { kind: "image", name: null, value: e.image },
          { kind: "text", name: null, value: e.text },
          { kind: "type", name: null, value: e.type },
          { kind: "date", name: null, value: e.publication_date.toString() },
        ],
        [{ kind: "invertion", name: "MXN", value: e.invertion }],
        [{ kind: "impresions", name: null, value: e.impressions }],
        [{ kind: "engagement", name: null, value: e.engagement }],
        [{ kind: "conversations", name: null, value: e.conversations }],
        [{ kind: "frecuency", name: null, value: e.frecuency }],
        [{ kind: "clics", name: null, value: e.clics }],
        [{ kind: "ctr", name: null, value: e.ctr }],
        [{ kind: "cpv", name: null, value: e.cpv }],
        [{ kind: "cpc", name: null, value: e.cpc }],
      ]);
      obj.contentTable01.push([
        [
          { kind: "date", name: null, value: e.publication_date.toString() },
          { kind: "image", name: null, value: e.image },
          { kind: "title", name: null, value: e.title },
          { kind: "text", name: null, value: e.text },
          { kind: "type", name: null, value: e.type },
        ],
        [{ kind: "invertion", name: null, value: e.invertion }],
        [{ kind: "reproductions", name: null, value: e.reproductions }],
        [{ kind: "interaction", name: null, value: e.interaction }],
        [{ kind: "engagemet_rate", name: null, value: e.engagemet_rate }],
        [{ kind: "favorites", name: null, value: e.favorites }],
        [{ kind: "comments", name: null, value: e.comments }],
        [{ kind: "likes", name: null, value: e.likes }],
        [{ kind: "unlikes", name: null, value: e.unlikes }],
        [{ kind: "shared", name: null, value: e.shared }],
        [{ kind: "click_rate_card", name: null, value: e.click_rate_card }],
        [{ kind: "clack__card", name: null, value: e.clack__card }],
        [{ kind: "impresion_card", name: null, value: e.impresion_card }],
        [{ kind: "teaser_card", name: null, value: e.teaser_card }],
        [{ kind: "click_rate", name: null, value: e.click_rate }],
        [{ kind: "teaser_clicks", name: null, value: e.teaser_clicks }],
        [{ kind: "impresions_teaser", name: null, value: e.impresions_teaser }],
        [{ kind: "minutes_views", name: null, value: e.minutes_views }],
        [{ kind: "frecuency", name: null, value: e.frecuency }],
        [{ kind: "views_100", name: null, value: e.views_100 }],
        [{ kind: "views_75", name: null, value: e.views_75 }],
        [{ kind: "views_50", name: null, value: e.views_50 }],
        [{ kind: "views_25", name: null, value: e.views_25 }],
        [{ kind: "words_associated", name: null, value: e.words_associated }],
        [{ kind: "affinity_rate", name: null, value: e.affinity_rate }],
      ]);
      return obj;
    },
    {
      contentPost01: [],
      activityTable01: [],
      contentTable01: [],
    }
  );
};
