export const postTrans = (data) => {
  //console.log(data);

  return data.reduce(
    (obj, e, index) => {
      obj.contentTable02.push([
        [
          {
            kind: "image",
            name: null,
            value: e.post_image,
          },
          {
            kind: "name",
            name: null,
            value: e.name,
          },
          {
            kind: "date",
            name: null,
            value: e.bench_date,
          },
          {
            kind: "type",
            name: null,
            value: e.bench_type,
          },
          {
            kind: "text",
            name: null,
            value: e.text,
          },
        ],
        [
          {
            kind: "interactions",
            name: null,
            value: e.interactions,
          },
        ],
        [
          {
            kind: "reactions",
            name: null,
            value: e.reactions,
          },
        ],
        [
          {
            kind: "comentarios",
            name: null,
            value: e.comentarios,
          },
        ],
        [
          {
            kind: "shares",
            name: null,
            value: e.shares,
          },
        ],
        [
          {
            kind: "post_day",
            name: null,
            value: e.post_day,
          },
        ],
      ]);
      return obj;
    },

    { contentTable02: [] }
  );
};
