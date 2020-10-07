export const bestMomentsYtTrans = (data) => {
  console.log(data);
  return data.reduce(
    (obj, e, index) => {
      if (e.tipo == "video_views") {
        obj.affinityBar01.push({
          kind: e.origen,
          valuesArray: [e.cantidad],
        });
      } else if (e.tipo == "keywords_content") {
        obj.contentList01.push({
          kind: e.origen,
          value: e.cantidad,
        });
      } else if (e.tipo == "keywords_response") {
        obj.conversationList01.push({
          kind: e.origen,
          value: e.cantidad,
        });
      } else if (e.tipo == "Best moment to interactions") {
        obj.conversationTitleText01 = {
          title: e.origen,
          text: e.cantidad,
        };
      } else if (e.tipo == "best time to stories") {
        obj.conversationTitleText02 = {
          title: e.origen,
          text: e.cantidad,
        };
      } else if (e.tipo == "best response time") {
        obj.conversationTitleText03 = {
          title: e.origen,
          text: e.cantidad,
        };
      } else if (e.tipo == "best format") {
        obj.conversationString01 = e.origen;
      }
      return obj;
    },
    {
      affinityBar01: [],
      contentList01: [],
      conversationList01: [],
      conversationTitleText01: [],
      conversationTitleText02: [],
      conversationTitleText03: [],
      conversationString01: [],
    }
  );
};
