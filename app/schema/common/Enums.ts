import { registerEnumType } from "type-graphql";

export enum PeriodType {
  DL = "DL",
  MT = "MT",
  Wk = "WK",
  YR = "YR",
  HY = "HY",
}

registerEnumType(PeriodType, {
  name: "Period",
  description: `
    Period receives the following 
    parameters:
    DL: Daily
    MT: Monthly
    WK: Weekly
    YR: Yearly
    HY: History
    `,
});
export enum OrderType {
  DESC = "DESC",
  ASC = "ASC",
}

registerEnumType(OrderType, {
  name: "Order",
  description: `
    the order receives the following 
    parameters:
    DESC = falling,
    ASC = upward,
    `,
});
export enum dataCompType {
  fans_page = "fans_page",
  organic_fans = "organic_fans",
  paid_fans = "paid_fans",
  viral_fans = "viral_fans",
  investment = "investment",
  engaged_users = "engaged_users",
  unique_impressions = "unique_impressions",
  total_impressions = "total_impressions",
  paid_impressions = "paid_impressions",
  organic_impressions = "organic_impressions",
  viral_impressions = "viral_impressions",
  engagemet_rate = "engagemet_rate",
  total_engagement = "total_engagement",
  paid_engagement = "paid_engagement",
  organic_engagement = "organic_engagement",
  viral_engagement = "viral_engagement",
  interactions = "interactions",
  organic_post = "organic_post",
  paid_post = "paid_post",
  video_viwes = "video_viwes",
}

registerEnumType(dataCompType, {
  name: "Data",
  description: `
     
They are the data types that can return the compCard
    parameters:
  fans_page = "fans_page",
  organic_fans = "organic_fans",
  paid_fans = "paid_fans",
  viral_fans = "viral_fans",
  investment = "investment",
  engaged_users = "engaged_users",
  unique_impressions = "unique_impressions",
  total_impresions = "total_impresions",
  paid_impresions = "paid_impresions",
  organic_impresions = "organic_impresions",
  viral_impresions = "viral_impresions",
  engagemet_rate = "engagemet_rate",
  total_engagement = "total_engagement",
  paid_engagemet = "paid_engagemet",
  organic_engagemet = "organic_engagemet",
  viral_engaemet = "viral_engaemet",
  interactions = "interactions",
  organic_post = "organic_post",
  paid_post = "paid_post",
  video_viwes = "video_viwes",
    `,
});
export enum CardIdIntFbType {
  generalInt01 = "generalInt01",
  generalInt02 = "generalInt02",
}
registerEnumType(CardIdIntFbType, {
  name: "CardIdInt",
  description: `
    Represents the id of the specific metric that you want to see:
    generalInt01 = Engagemet rate,
    generalInt02 = Affinity rate,
    `,
});
export enum CardIdStringFbType {
  generalString01 = "generalString01",
  conversationString01 = "conversationString01",
}
registerEnumType(CardIdStringFbType, {
  name: "CardIdString",
  description: `
    Represents the id of the specific metric that you want to see:
    generalString01 = Sentiment,
    conversationString01 = Best Format,
    `,
});
export enum CardIdValuePrevFbType {
  generalValuePrev01 = "generalValuePrev01",
  generalValuePrev02 = "generalValuePrev02",
  generalValuePrev03 = "generalValuePrev03",
  generalValuePrev04 = "generalValuePrev04",
  communityValuePrev01 = "communityValuePrev01",
  communityValuePrev02 = "communityValuePrev02",
  communityValuePrev03 = "communityValuePrev03",
  communityValuePrev04 = "communityValuePrev04",
}
registerEnumType(CardIdValuePrevFbType, {
  name: "CardIdValuePrev",
  description: `
    Represents the id of the specific metric that you want to see:
    generalValuePrev01 = Page Fans,
    generalValuePrev02 = Reach,
    generalValuePrev03 = Engaged Users,
    generalValuePrev04 = Interactions,
    communityValuePrev01= New Fans,
    communityValuePrev02= New Organic Fans,
    communityValuePrev03= New Paid Fans,
    communityValuePrev04= Lost Fans,
    `,
});
export enum CardIdSmallFbType {
  communitySmall01 = "communitySmall01",
  communitySmall02 = "communitySmall02",
  activitySmall01 = "activitySmall01",
  activitySmall02 = "activitySmall02",
  activitySmall03 = "activitySmall03",
  activitySmall04 = "activitySmall04",
  activitySmall05 = "activitySmall05",
  activitySmall06 = "activitySmall06",
  activitySmall07 = "activitySmall07",
  activitySmall08 = "activitySmall08",
  affinitySmall01 = "affinitySmall01",
  affinitySmall02 = "affinitySmall02",
  affinitySmall03 = "affinitySmall03",
  affinitySmall04 = "affinitySmall04",
  affinitySmall05 = "affinitySmall05",
  affinitySmall06 = "affinitySmall06",
  affinitySmall07 = "affinitySmall07",
  affinitySmall08 = "affinitySmall08",
  conversationSmall01 = "conversationSmall01",
  conversationSmall02 = "conversationSmall02",
}
registerEnumType(CardIdSmallFbType, {
  name: "CardIdSmall",
  description: `
    Represents the id of the specific metric that you want to see:
    communitySmall01 = Total Fans,
    communitySmall02 = Page Fans,
    activitySmall01 = Spend,
    activitySmall02 = Ad Impresion,
    activitySmall03 = Ad Reach,
    activitySmall04 = Ad Interactions,
    activitySmall05 = Ad Frecuency,
    activitySmall06 = Relevance Score,
    activitySmall07 = CTR,
    activitySmall08 = CPC,
    affinitySmall01 = Engagement Rate,
    affinitySmall02 = Engaged Users,
    affinitySmall03 = User Stories,
    affinitySmall04 = Post Performance Ratio,
    affinitySmall05 = Reactions,
    affinitySmall06 = Shares,
    affinitySmall07 = Comments,
    affinitySmall08 = Clicks,
    conversationSmall01 = Comments,
    conversationSmall01 = Inbox Messages,
    `,
});
export enum CardIdCompFbType {
  communityComp01 = "communityComp01",
  activityComp01 = "activityComp01",
  affinityComp01 = "affinityComp01",
  affinityComp02 = "affinityComp02",
  affinityComp03 = "affinityComp03",
  affinityComp04 = "affinityComp04",
}
registerEnumType(CardIdCompFbType, {
  name: "CardIdComp",
  description: `
    Represents the id of the specific metric that you want to see:
    communityComp01 = Comparation chart of Community,
    activityComp01 = NA,
    affinityComp01 = NA,
    affinityComp02 = NA,
    affinityComp03 = NA,
    affinityComp04 = NA,
    `,
});
export enum CardIdBarFbType {
  communityBar01 = "communityBar01",
  affinityBar01 = "affinityBar01",
  affinityBar02 = "affinityBar02",
  affinityBar03 = "affinityBar03",
  conversationBar01 = "conversationBar01",
}
registerEnumType(CardIdBarFbType, {
  name: "CardIdBar",
  description: `
    Represents the id of the specific metric that you want to see:
    communityBar01 = Gender Age,
    affinityBar01 = Reactions,
    affinityBar02 = Interactions,
    affinityBar03 = Video Views,
    conversationBar01 = Sentiment Evolution,
    `,
});
export enum CardIdDonutFbType {
  communityDonutDetail01 = "communityDonutDetail01",
  affinityDonutDetail01 = "affinityDonutDetail01",
}
registerEnumType(CardIdDonutFbType, {
  name: "CardIdDonut",
  description: `
    Represents the id of the specific metric that you want to see:
    communityDonutDetail01 = Main Generation,
    affinityDonutDetail01 = Post by Format,
    `,
});
export enum CardIdListPrevFbType {
  communityListPrev01 = "communityListPrev01",
}
registerEnumType(CardIdListPrevFbType, {
  name: "CardIdListPrev",
  description: `
    Represents the id of the specific metric that you want to see:
    communityListPrev01 = Countries,
    `,
});
export enum CardIdListFbType {
  communityList01 = "communityList01",
  communityList02 = "communityList02",
  affinityList01 = "affinityList01",
  contentList01 = "contentList01",
  conversationList01 = "conversationList01",
  conversationList02 = "conversationList02",
}
registerEnumType(CardIdListFbType, {
  name: "CardIdList",
  description: `
    Represents the id of the specific metric that you want to see:
    communityList01 = External Sourse,
    communityList02 = Insternal Sourse,
    affinityList01 = Post by Spend,
    contentList01 = Keywods,
    conversationList01= Keywods,
    conversationList02 = Current Sentiment,
    `,
});

export enum CardIdTableFbType {
  activityTable01 = "activityTable01",
  contentTable01 = "contentTable01",
}
registerEnumType(CardIdTableFbType, {
  name: "CardIdTable",
  description: `
    Represents the id of the specific metric that you want to see:
    activityTable01 = Post,
    contentTable01 = Post detail,
    `,
});
export enum CardIdBubblesFbType {
  affinityBubbles01 = "affinityBubbles01",
}
registerEnumType(CardIdBubblesFbType, {
  name: "CardIdBubbles",
  description: `
    Represents the id of the specific metric that you want to see:
    affinityBubbles01 = Performance per day and Hour,
    `,
});

export enum CardIdPostFbType {
  contentPost01 = "contentPost01",
}
registerEnumType(CardIdPostFbType, {
  name: "CardIdPost",
  description: `
    Represents the id of the specific metric that you want to see:
    contentPost01 = Post,
    `,
});
export enum CardIdTitleTextFbType {
  conversationTitleText01 = "conversationTitleText01",
  conversationTitleText02 = "conversationTitleText02",
  conversationTitleText03 = "conversationTitleText03",
  conversationTitleText04 = "conversationTitleText04",
  conversationTitleText05 = "conversationTitleText05",
}
registerEnumType(CardIdTitleTextFbType, {
  name: "CardIdTitleText",
  description: `
    Represents the id of the specific metric that you want to see:
    conversationTitleText01 = Response Rate,
    conversationTitleText02 = Response Time,
    conversationTitleText03 = Best moment to interactions,
    conversationTitleText04 = Best time to stories,
    conversationTitleText05 = Best response time,
    `,
});
export enum CardIdGeoFbType {
  communityGeo01 = "communityGeo01",
}
registerEnumType(CardIdGeoFbType, {
  name: "CardIdGeo",
  description: `
    Represents the id of the specific metric that you want to see:
    communityGeo01 = Mapa de FB,
    `,
});
export enum topPeopleFbType {
  communityTop01 = "communityTop01",
}
registerEnumType(topPeopleFbType, {
  name: "CardIdtopPeople",
  description: `
    Represents the id of the specific metric that you want to see:
    communityTop01 = People top ,
    `,
});
export enum desktopYtType {
  communityDesktop01 = "communityDesktop01",
}
registerEnumType(desktopYtType, {
  name: "CardIdDesktop",
  description: `
    Represents the id of the specific metric that you want to see:
    communityDesktop01 = Views by desktop ,
    `,
});

//Enums By Trends

export enum CardIdIntTrType {
  generalInt01 = "generalInt01",
  generalInt02 = "generalInt02",
}
registerEnumType(CardIdIntTrType, {
  name: "CardIdIntTr",
  description: `
    Represents the id of the specific metric that you want to see:
    generalInt01 = Varage monthly searches,
    generalInt02 = Numbers of google search,
    `,
});
export enum CardIdSmallTrType {
  generalSmail01 = "generalSmail01",
  generalSmail02 = "generalSmail02",
  generalSmail03 = "generalSmail03",
  generalSmail04 = "generalSmail04",
}
registerEnumType(CardIdSmallTrType, {
  name: "CardIdSmallTr",
  description: `
    Represents the id of the specific metric that you want to see:
    generalSmail01 = "Web serches",
    generalSmail02 = "Image search",
    generalSmail03 = "News search",
    generalSmail04 = "Youtube Search",
    `,
});
export enum CardIdCompTrType {
  geenralComp01 = "geenralComp01",
  geenralComp02 = "geenralComp02",
}
registerEnumType(CardIdCompTrType, {
  name: "CardIdCompTr",
  description: `
    Represents the id of the specific metric that you want to see:
    communityComp01 = Comparation chart of Community,
    geenralComp01 = interest overtime,
    geenralComp02 = keywords comparation,
    `,
});
export enum CardIdListPrevTrType {
  generalListPrev01 = "generalListPrev01",
  generalListPrev02 = "generalListPrev02",
}
registerEnumType(CardIdListPrevTrType, {
  name: "CardIdListPrevTr",
  description: `
    Represents the id of the specific metric that you want to see:
    generalListPrev01 = search by conuntries,
    generalListPrev02 = keywords list,
    `,
});
export enum CardIdListTrType {
  generalList01 = "generalList01",
  generalList02 = "generalList02",
}
registerEnumType(CardIdListTrType, {
  name: "CardIdListTr",
  description: `
    Represents the id of the specific metric that you want to see:
    generalList01 = related topics,
    generalList02 = related search,
    `,
});
export enum CardIdGeoTrType {
  generalGeo01 = "generalGeo01",
}
registerEnumType(CardIdGeoTrType, {
  name: "CardIdNwGeoTr",
  description: `
    Represents the id of the specific metric that you want to see:
    generalGeo01 = Mapa de Trends,
    `,
});
//enums News
export enum CardIdStringNwType {
  generalString01 = "generalString01",
}
registerEnumType(CardIdStringNwType, {
  name: "CardIdNwString",
  description: `
    Represents the id of the specific metric that you want to see:
    generalString01 = Name of Brand,
    `,
});
export enum CardIdPostNwType {
  geenralPost01 = "geenralPost01",
}
registerEnumType(CardIdPostNwType, {
  name: "CardIdNwPost",
  description: `
    Represents the id of the specific metric that you want to see:
     geenralPost01 = Post,
    `,
});
//types para Bench Facebook
export enum CardIdTableBenchFbType {
  generalTable01 = "generalTable01",
  performanceTable01 = "performanceTable01",
  contentTable01 = "contentTable01",
  contentTable02 = "contentTable02",
  responseTable01 = "responseTable01",
}
registerEnumType(CardIdTableBenchFbType, {
  name: "CardIdTableBenchFb",
  description: `
    Represents the id of the specific metric that you want to see:
     generalTable01 = General,
  performanceTable01 = Performances,
  contentTable01 = Post type,
  contentTable02 = Post,
  responseTable01 = Sentiement,
    `,
});
export enum CardIdPrebsValuesBenchFbType {
  activityPrevsValues01 = "activityPrevsValues01",
  performancesPrevsValues01 = "performancesPrevsValues01",
}
registerEnumType(CardIdPrebsValuesBenchFbType, {
  name: "CardIdPrebsValuesBenchFb",
  description: `
    Represents the id of the specific metric that you want to see:
     activityPrevsValues01 = activity,
     performancesPrevsValues01 = performances,
    `,
});
export enum DataPrebsValuesBenchFbType {
  fans = "fans",
  interactions = "interactions",
  engagemet_rate = "engagemet_rate",
  share_of_voice = "share_of_voice",
  clicks = "clicks",
  comments = "comments",
  shares = "shares",
  reactions = "reactions",
}
registerEnumType(DataPrebsValuesBenchFbType, {
  name: "DataPrebsValuesBenchFb",
  description: `
   They are the data types that can return the prebsValuesCard
    parameters:
    fans = "fans",
    interactions = "interactions",
    engagemet_rate = "engagemet_rate",
    share_of_voice = "share_of_voice",
    clicks = "clicks",
    comments = "comments",
    shares = "shares",
    reactions = "reactions",
    `,
});
export enum CardIdCompBenchFbType {
  activityCopm01 = "activityCopm01",
}
registerEnumType(CardIdCompBenchFbType, {
  name: "CardIdCompBenchFb",
  description: `
    Represents the id of the specific metric that you want to see:
     activityPrevsValues01 = activity,
     performancesPrevsValues01 = performances,
    `,
});
export enum DataCompBenchFbType {
  fans = "fans",
  interactions = "interactions",
  engagemet_rate = "engagemet_rate",
  share_of_voice = "share_of_voice",
}
registerEnumType(DataCompBenchFbType, {
  name: "DataCompBenchFb",
  description: `
   They are the data types that can return the prebsValuesCard
    parameters:
    fans = "fans",
    interactions = "interactions",
    engagemet_rate = "engagemet_rate",
    share_of_voice = "share_of_voice",
    `,
});
export enum CardIdBubblesBenchFbType {
  affinityBubbles01 = "affinityBubbles01",
}
registerEnumType(CardIdBubblesBenchFbType, {
  name: "CardIdBubblesBenchFb",
  description: `
    Represents the id of the specific metric that you want to see:
     affinityBubbles01 = affinityBubbles01,
    `,
});
export enum CardIdlistBenchFbType {
  contentList01 = "contentList01",
  responseList01 = "responseList01",
}
registerEnumType(CardIdlistBenchFbType, {
  name: "CardIdlistBenchFb",
  description: `
    Represents the id of the specific metric that you want to see:
     contentList01 = "contentList01",
     responseList01 = "responseList01",
    `,
});
