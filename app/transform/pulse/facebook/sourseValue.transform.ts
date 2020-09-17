export const sourseValueTrans = (data) => {
  return data.reduce(
    (obj, e, index) => {
      if (e.tipo == "External") {
        obj.communityList01.push({
          kind: e.origen,
          value: e.cantidad,
        });
      } else if (e.tipo == "Internal") {
        obj.communityList02.push({
          kind: e.origen,
          value: e.cantidad,
        });
      } else if (e.tipo == "post_format") {
        obj.affinityDonutDetail01.valuesArray.push({
          kind: e.origen,
          value: e.cantidad,
        });
      } else if (e.tipo == "post_speend") {
        obj.affinityList01.push({
          kind: e.origen,
          value: e.cantidad,
        });
      } else if (e.tipo == "content_keywords") {
        obj.contentList01.push({
          kind: e.origen,
          value: e.cantidad,
        });
      } else if (e.tipo == "conversation_keywords") {
        obj.conversationList01.push({
          kind: e.origen,
          value: e.cantidad,
        });
      } else if (e.tipo == "video_views") {
        obj.affinityBar03.push({
          kind: e.origen,
          valuesArray: [e.cantidad],
        });
      }
      return obj;
    },
    {
      communityList01: [],
      communityList02: [],
      affinityDonutDetail01: {
        valuesArray: [],
        title: "Post/Day",
        subtitle: "1.5",
      },
      affinityList01: [],
      affinityBar03: [],
      contentList01: [],
      conversationList01: [],
      //calcular despues
      communityDonutDetail01: {
        valuesArray: [
          {
            kind: "women",
            value: "78",
          },
          {
            kind: "men",
            value: "20",
          },
          {
            kind: "others",
            value: "2",
          },
        ],
        title: "Generacion Z",
        subtitle: "woman",
        text: "from 9 to 24 years old",
      },
    }
  );
};
