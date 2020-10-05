export const postTrans = (data) => {
  // console.log(data);
  return data.reduce(
    (obj, e, index) => {
      obj.contentTable02.push([
        [
          {
            kind: null,
            name: "name",
            value: e.name,
          },
          {
            kind: null,
            name: "username",
            value: "@" + e.name,
          },
          {
            kind: null,
            name: "image",
            value: e.post_image,
          },

          {
            kind: null,
            name: "date",
            value: e.bench_date,
          },
          {
            kind: null,
            name: "type",
            value: e.bench_type,
          },
          {
            kind: null,
            name: "text",
            value: e.text,
          },
        ],
        [
          {
            kind: null,
            name: "interactions",
            value: e.interactions,
          },
        ],
        [
          {
            kind: null,
            name: "clics",
            value: e.clics,
          },
        ],
        [
          {
            kind: null,
            name: "comentarios",
            value: e.comentarios,
          },
        ],
        [
          {
            kind: null,
            name: "shares",
            value: e.shares,
          },
        ],
        [
          {
            kind: null,
            name: "replies",
            value: e.replies,
          },
        ],
        [
          {
            kind: null,
            name: "post_day",
            value: e.post_day,
          },
        ],
      ]);
      return obj;
    },

    { contentTable02: [] }
  );
};
