import { ProcessedGender } from "../../../interfaces/pulse/facebook";

export const communutyGenderTrans = (data:ProcessedGender[]) => {
  // let mainGeneration = data.reduce((obj, e, index) => {
  //   if(data[0].genero==)
  // })
  return {
    //pediente
    communityDonutDetail01: {},
    communityBar01: [
      {
        kind: 'Women',
        valuesArray: [
          data.find(g=>g.genero=='Women'&&g.age=='13-17').cantidad,
          data.find(g=>g.genero=='Women'&&g.age=='18-24').cantidad,
          data.find(g=>g.genero=='Women'&&g.age=='25-34').cantidad,
          data.find(g=>g.genero=='Women'&&g.age=='35-44').cantidad,
          data.find(g=>g.genero=='Women'&&g.age=='45-54').cantidad,
          data.find(g=>g.genero=='Women'&&g.age=='55-64').cantidad,
          data.find(g=>g.genero=='Women'&&g.age=='65+').cantidad,
        ],
      },
      {
        kind: 'men',
        valuesArray: [
          data.find(g=>g.genero=='men'&&g.age=='13-17').cantidad,
          data.find(g=>g.genero=='men'&&g.age=='18-24').cantidad,
          data.find(g=>g.genero=='men'&&g.age=='25-34').cantidad,
          data.find(g=>g.genero=='men'&&g.age=='35-44').cantidad,
          data.find(g=>g.genero=='men'&&g.age=='45-54').cantidad,
          data.find(g=>g.genero=='men'&&g.age=='55-64').cantidad,
          data.find(g=>g.genero=='men'&&g.age=='65+').cantidad,
        ],
      },
      {
        kind: 'Others',
        valuesArray: [
          data.find(g=>g.genero=='Others'&&g.age=='13-17').cantidad,
          data.find(g=>g.genero=='Others'&&g.age=='18-24').cantidad,
          data.find(g=>g.genero=='Others'&&g.age=='25-34').cantidad,
          data.find(g=>g.genero=='Others'&&g.age=='35-44').cantidad,
          data.find(g=>g.genero=='Others'&&g.age=='45-54').cantidad,
          data.find(g=>g.genero=='Others'&&g.age=='55-64').cantidad,
          data.find(g=>g.genero=='Others'&&g.age=='65+').cantidad,
        ],
      },
    ],
  };
};
