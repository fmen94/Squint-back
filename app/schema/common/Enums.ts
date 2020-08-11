import { registerEnumType } from "type-graphql";


export enum PeriodType {
    DL="DL",
    MT= "MT",
    QR= "QR",
    Wk= "WK",
    YR= "YR",
    HY= "HY"
  };

  registerEnumType(PeriodType, {
    name: "Period",
    description: `
    Period receives the following 
    parameters:
    DL: Daily
    MT: Monthly
    QR: Quarterly
    WK: Weekly
    YR: Yearly
    HY: History
    `
  });

  export enum CardIdIntFbType {
    generalInt01= "generalInt01",
    generalInt02= "generalInt02"
  };
  export enum CardIdStringFbType {
    generalString01= "generalString01"
  };
  export enum CardIdValuePrevFbType {
    generalValuePrev01= "generalValuePrev01",
    generalValuePrev02= "generalValuePrev02",
    generalValuePrev03= "generalValuePrev03",
    generalValuePrev04= "generalValuePrev04"
  };
  registerEnumType(CardIdIntFbType, {
    name: "CardIdInt",
    description: `
    Represents the id of the specific metric that you want to see:
    generalInt01 = Engagemet rate,
    generalInt02 = Affinity rate,
    `
  });
  registerEnumType(CardIdStringFbType, {
    name: "CardIdString",
    description: `
    Represents the id of the specific metric that you want to see:
    generalString01 = Sentiment,
    `
  });
  registerEnumType(CardIdValuePrevFbType, {
    name: "CardIdValuePrev",
    description: `
    Represents the id of the specific metric that you want to see:
    generalValuePrev01 = Page Fans,
    generalValuePrev02 = Reach,
    generalValuePrev03 = Engaged Users,
    generalValuePrev04 = Interactions,
    `
  });