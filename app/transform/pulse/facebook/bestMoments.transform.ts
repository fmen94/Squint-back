export const bestMomentsTrans = (data) => {
  data = Object.values(data).filter((r: any) => r.command === "FETCH");
  data = data[0].rows;
  return data.reduce(
    (obj, e, index) => {
      if (e.tipo == "response_rate") {
        obj.conversationTitleText01 = {
          title: e.origen,
          text: e.cantidad,
        };
      } else if (e.tipo == "response_time") {
        obj.conversationTitleText02 = {
          title: e.origen,
          text: e.cantidad,
        };
      } else if (e.tipo == "Best moment to interactions") {
        obj.conversationTitleText03 = {
          title: e.origen,
          text: e.cantidad,
        };
      } else if (e.tipo == "best time to stories") {
        obj.conversationTitleText04 = {
          title: e.origen,
          text: e.cantidad,
        };
      } else if (e.tipo == "best response time") {
        obj.conversationTitleText05 = {
          title: e.origen,
          text: e.cantidad,
        };
      } else if (e.tipo == "best format") {
        obj.conversationString01 = e.origen;
      }
      return obj;
    },
    {
      conversationTitleText01: {},
      conversationTitleText02: {},
      conversationTitleText03: {},
      conversationTitleText04: {},
      conversationTitleText05: {},
      conversationString01: {},
    }
  );
};
