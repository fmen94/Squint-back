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
            name: "followers",
            value: e.followers,
          },
        ],
        [
          {
            kind: e.id,
            name: "interactions",
            value: e.interactions,
          },
        ],
        [
          {
            kind: e.id,
            name: "engagemet_rate",
            value: e.engagemet_rate,
          },
        ],
        [
          {
            kind: e.id,
            name: "share_of_voice",
            value: e.share_of_voice,
          },
        ],
      ]);
      obj.activityPrevsValues01.followers.push({
        value: e.followers,
        diff: 0,
        name: e.name,
      });
      obj.activityPrevsValues01.interactions.push({
        value: e.interactions,
        diff: 0,
        name: e.name,
      });
      obj.activityPrevsValues01.engagemet_rate.push({
        value: e.engagemet_rate,
        diff: 0,
        name: e.name,
      });
      obj.activityPrevsValues01.share_of_voice.push({
        value: e.share_of_voice,
        diff: 0,
        name: e.name,
      });
      obj.activityCopm01.followers.push({
        value: e.followers,
        diff: 0,
        name: e.bench_date,
      });
      obj.activityCopm01.interactions.push({
        value: e.interactions,
        diff: 0,
        name: e.bench_date,
      });
      obj.activityCopm01.engagemet_rate.push({
        value: e.engagemet_rate,
        diff: 0,
        name: e.bench_date,
      });
      obj.activityCopm01.share_of_voice.push({
        value: e.share_of_voice,
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
            name: "interactions",
            value: e.interactions,
          },
        ],
        [
          {
            kind: e.id,
            name: "clicks",
            value: e.clicks,
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
            name: "replies",
            value: e.replies,
          },
        ],
      ]);
      obj.performancesPrevsValues01.interactions.push({
        value: e.interactions,
        diff: 0,
        name: e.name,
      });
      obj.performancesPrevsValues01.clicks.push({
        value: e.clicks,
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
      obj.performancesPrevsValues01.replies.push({
        value: e.replies,
        diff: 0,
        name: e.name,
      });
      obj.affinityBubbles01.push({
        kind: e.id,
        date: e.bench_date,
        value: e.interactions,
      });
      obj.contentTable01.push([
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
            name: "image",
            value: e.image,
          },
        ],
        [
          {
            kind: e.id,
            name: "video",
            value: e.video,
          },
        ],
        [
          {
            kind: e.id,
            name: "carrousel",
            value: e.carrousel,
          },
        ],
        [
          {
            kind: e.id,
            name: "stories",
            value: e.stories,
          },
        ],
      ]);
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
        followers: [],
        interactions: [],
        engagemet_rate: [],
        share_of_voice: [],
      },
      activityCopm01: {
        followers: [],
        interactions: [],
        engagemet_rate: [],
        share_of_voice: [],
      },
      performanceTable01: [],
      performancesPrevsValues01: {
        interactions: [],
        clicks: [],
        comments: [],
        shares: [],
        replies: [],
      },
      affinityBubbles01: [],
      contentTable01: [],
      responseTable01: [],
    }
  );
};
