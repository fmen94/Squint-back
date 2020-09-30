export const keywordsTrans = (data) => {
  // console.log(data);
  return data.reduce(
    (obj, e, index) => {
      if (e.tipo == "keywords_response") {
        let exist = obj.responseList01.findIndex((el) => el.id == e.id);
        if (exist > -1) {
          obj.responseList01[exist].data.push({
            kind: e.origen,
            value: e.cantidad,
          });
        } else {
          obj.responseList01.push({
            id: e.id,
            data: [
              {
                kind: e.origen,
                value: e.cantidad,
              },
            ],
          });
        }
      } else if (e.tipo == "keywords_content") {
        let exist = obj.contentList01.findIndex((el) => el.id == e.id);
        if (exist > -1) {
          obj.contentList01[exist].data.push({
            kind: e.origen,
            value: e.cantidad,
          });
        } else {
          obj.contentList01.push({
            id: e.id,
            data: [
              {
                kind: e.origen,
                value: e.cantidad,
              },
            ],
          });
        }
      }
      return obj;
    },
    { contentList01: [], responseList01: [] }
  );
};
