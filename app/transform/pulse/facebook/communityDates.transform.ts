export const communutyDatesTrans = (data) => {
  data = Object.values(data).filter((r: any) => r.command === "FETCH");
  data = data[0].rows;
  return {
    communitySmall01: {
      valueInt: data[11].valor,
      diff: data[10].valor,
      valuesArray: [
        { date: data[0].fecha, value: data[0].valor },
        { date: data[1].fecha, value: data[1].valor },
        { date: data[2].fecha, value: data[2].valor },
        { date: data[3].fecha, value: data[3].valor },
        { date: data[4].fecha, value: data[4].valor },
        { date: data[5].fecha, value: data[5].valor },
        { date: data[6].fecha, value: data[6].valor },
        { date: data[7].fecha, value: data[7].valor },
        { date: data[8].fecha, value: data[8].valor },
        { date: data[9].fecha, value: data[9].valor },
        { date: data[10].fecha, value: data[10].valor },
        { date: data[11].fecha, value: data[11].valor },
      ],
    },
    communitySmall02: {
      valueInt: data[10].valor,
      diff: data[11].valor,
      valuesArray: [
        { date: data[0].fecha, value: data[0].valor },
        { date: data[1].fecha, value: data[1].valor },
        { date: data[2].fecha, value: data[2].valor },
        { date: data[3].fecha, value: data[3].valor },
        { date: data[4].fecha, value: data[4].valor },
        { date: data[5].fecha, value: data[5].valor },
        { date: data[6].fecha, value: data[6].valor },
        { date: data[7].fecha, value: data[7].valor },
        { date: data[8].fecha, value: data[8].valor },
        { date: data[9].fecha, value: data[9].valor },
        { date: data[10].fecha, value: data[11].valor },
        { date: data[11].fecha, value: data[11].valor },
      ],
    },
    communityValuePrev01: {
      value: data[11].valor,
      diff: data[10].valor,
    },
    communityValuePrev02: {
      value: data[11].valor,
      diff: data[10].valor,
    },
    communityValuePrev03: {
      value: data[11].valor,
      diff: data[10].valor,
    },
    communityValuePrev04: {
      value: data[11].valor,
      diff: data[10].valor,
    },
    communityComp01: [
      { name: data[0].fecha, value: data[0].valor, diff: null },
      { name: data[1].fecha, value: data[1].valor, diff: data[0].valor },
      { name: data[2].fecha, value: data[2].valor, diff: data[1].valor },
      { name: data[3].fecha, value: data[3].valor, diff: data[2].valor },
      { name: data[4].fecha, value: data[4].valor, diff: data[3].valor },
      { name: data[5].fecha, value: data[5].valor, diff: data[4].valor },
      { name: data[6].fecha, value: data[6].valor, diff: data[5].valor },
      { name: data[7].fecha, value: data[7].valor, diff: data[6].valor },
      { name: data[8].fecha, value: data[8].valor, diff: data[7].valor },
      { name: data[9].fecha, value: data[9].valor, diff: data[8].valor },
      { name: data[10].fecha, value: data[10].valor, diff: data[9].valor },
      { name: data[11].fecha, value: data[11].valor, diff: data[10].valor },
    ],
  };
};
