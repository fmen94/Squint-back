export const generalTrans = (data) => {
  // console.log(data);
  return data.reduce(
    (obj, e, index) => {
      obj.generalTable01.push([
        [
          {
            kind: e.username,
            name: "nombre",
            value: e.name,
          },
        ],
        [
          {
            kind: e.id,
            name: "suscribers",
            value: e.suscribers,
          },
        ],
        [
          {
            kind: e.id,
            name: "views",
            value: e.views,
          },
        ],
        [
          {
            kind: e.id,
            name: "videos_count",
            value: e.videos_count,
          },
        ],
        [
          {
            kind: e.id,
            name: "minutes_viewed",
            value: e.minutes_viewed,
          },
        ],
      ]);
      obj.activityPrevsValues01.suscribers.push({
        value: e.suscribers,
        diff: 0,
        name: e.name,
      });
      obj.activityPrevsValues01.views.push({
        value: e.views,
        diff: 0,
        name: e.name,
      });
      obj.activityPrevsValues01.videos_count.push({
        value: e.videos_count,
        diff: 0,
        name: e.name,
      });
      obj.activityPrevsValues01.minutes_viewed.push({
        value: e.minutes_viewed,
        diff: 0,
        name: e.name,
      });
      obj.activityCopm01.suscribers.push({
        value: e.suscribers,
        diff: 0,
        name: e.bench_date,
      });
      obj.activityCopm01.views.push({
        value: e.views,
        diff: 0,
        name: e.bench_date,
      });
      obj.activityCopm01.videos_count.push({
        value: e.videos_count,
        diff: 0,
        name: e.bench_date,
      });
      obj.activityCopm01.minutes_viewed.push({
        value: e.minutes_viewed,
        diff: 0,
        name: e.bench_date,
      });
      obj.performanceTable01.push([
        [
          {
            kind: e.username,
            name: "nombre",
            value: e.name,
          },
        ],
        [
          {
            kind: e.id,
            name: "engagemet",
            value: e.engagemet,
          },
        ],
        [
          {
            kind: e.id,
            name: "views",
            value: e.views,
          },
        ],
        [
          {
            kind: e.id,
            name: "likes",
            value: e.likes,
          },
        ],
        [
          {
            kind: e.id,
            name: "comments",
            value: e.comments,
          },
        ],
        [
          {
            kind: e.id,
            name: "shares",
            value: e.shares,
          },
        ],
        [
          {
            kind: e.id,
            name: "favorites",
            value: e.favorites,
          },
        ],
        [
          {
            kind: e.id,
            name: "unlikes",
            value: e.unlikes,
          },
        ],
      ]);
      obj.performancesPrevsValues01.engagemet.push({
        value: e.engagemet,
        diff: 0,
        name: e.name,
      });
      obj.performancesPrevsValues01.views.push({
        value: e.views,
        diff: 0,
        name: e.name,
      });
      obj.performancesPrevsValues01.likes.push({
        value: e.likes,
        diff: 0,
        name: e.name,
      });
      obj.performancesPrevsValues01.comments.push({
        value: e.comments,
        diff: 0,
        name: e.name,
      });
      obj.performancesPrevsValues01.shares.push({
        value: e.shares,
        diff: 0,
        name: e.name,
      });
      obj.affinityBubbles01.push({
        kind: e.id,
        date: e.bench_date,
        value: e.interactions,
      });
      obj.responseTable01.push([
        [
          {
            kind: e.username,
            name: "nombre",
            value: e.name,
          },
        ],
        [
          {
            kind: e.id,
            name: "sentiment_good",
            value: e.sentiment_good,
          },
        ],
        [
          {
            kind: e.id,
            name: "sentiment_bad",
            value: e.sentiment_bad,
          },
        ],
        [
          {
            kind: e.id,
            name: "sentiment_good_percentage",
            value:
              (e.sentiment_good * 100) / (e.sentiment_good + e.sentiment_bad),
          },
          {
            kind: e.id,
            name: "sentiment_bad_percentage",
            value:
              (e.sentiment_bad * 100) / (e.sentiment_good + e.sentiment_bad),
          },
        ],
      ]);
      return obj;
    },

    {
      generalTable01: [],
      activityPrevsValues01: {
        suscribers: [],
        views: [],
        videos_count: [],
        minutes_viewed: [],
      },
      activityCopm01: {
        suscribers: [],
        views: [],
        videos_count: [],
        minutes_viewed: [],
      },
      performanceTable01: [],
      performancesPrevsValues01: {
        engagemet: [],
        views: [],
        likes: [],
        comments: [],
        shares: [],
        favorites: [],
        unlikes: [],
      },
      affinityBubbles01: [],
      responseTable01: [],
    }
  );
};
