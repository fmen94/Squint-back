export const valuePrevTrans = (data) => {
  data = Object.values(data).filter((r: any) => r.command === "FETCH");
  data = data[0].rows;
  return {
    generalValuePrev01: {
      value: data[0].page_fans,
      diff: data[1].page_fans,
    },
    generalValuePrev02: {
      value: data[0].reach,
      diff: data[1].reach,
    },
    generalValuePrev03: {
      value: data[0].engaged_users,
      diff: data[1].engaged_users,
    },
    generalValuePrev04: {
      value: data[0].interactions,
      diff: data[0].interactions,
    },
    generalInt01: data[0].engagement_rate,
    generalInt02: data[0].afinity_rate,
    generalString01: data[0].sentiment,
  };
};
