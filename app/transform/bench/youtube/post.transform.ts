export const postTrans = (data) => {
  console.log(data);
  return data.reduce(
    (obj, e, index) => {
      obj.contentTable01.push([
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
            name: "engagements",
            value: e.engagements,
          },
        ],
        [
          {
            kind: null,
            name: "views",
            value: e.views,
          },
        ],
        [
          {
            kind: null,
            name: "likes",
            value: e.likes,
          },
        ],
        [
          {
            kind: null,
            name: "comments",
            value: e.comments,
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
            name: "favorites",
            value: e.favorites,
          },
        ],
        [
          {
            kind: null,
            name: "unlikes",
            value: e.unlikes,
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

    { contentTable01: [] }
  );
};
