export const communutyGenderTrans = (data) => {
  data = Object.values(data).filter((r: any) => r.command === "FETCH");
  data = data[0].rows;
  return {
    communityBar01: [
      {
        kind: data[0].genero,
        valuesArray: [
          data[0].cantidad,
          data[1].cantidad,
          data[2].cantidad,
          data[3].cantidad,
          data[4].cantidad,
          data[5].cantidad,
          data[6].cantidad,
        ],
      },
      {
        kind: data[7].genero,
        valuesArray: [
          data[7].cantidad,
          data[8].cantidad,
          data[9].cantidad,
          data[10].cantidad,
          data[11].cantidad,
          data[12].cantidad,
          data[13].cantidad,
        ],
      },
      {
        kind: data[14].genero,
        valuesArray: [
          data[14].cantidad,
          data[15].cantidad,
          data[16].cantidad,
          data[17].cantidad,
          data[18].cantidad,
          data[19].cantidad,
          data[20].cantidad,
        ],
      },
    ],
  };
};
