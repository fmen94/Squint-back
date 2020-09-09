import moment = require("moment");

/**
 *
 */
export const OrderOptions = {
  nullable: true,
  defaultValue: "ASC",
  description: "Receive an Enum ORder and the default is ASC",
};
export const DataCompOptions = {
  nullable: true,
  defaultValue: "fans_page",
  description:
    "Receive an Enum data of comparations card and the default is fans_page",
};
export const PeriodOptions = {
  nullable: true,
  defaultValue: "DL",
  description: "Receive an Enum Period and the default is DL",
};

//Date startend
export const DateEndOptions = {
  nullable: true,
  defaultValue: { date: moment().format("DD-MM-YYYYThh:mm:ss"), period: "DL" },
  description: `It receives the final date of which the information is displayed in format DD-MM-YYYYThh:mm:ss and 
    Receive an Enum Period and the default is DL
    and the default date is: ${moment().format("DD-MM-YYYYThh:mm:ss")} `,
};

//Card id
export const CardIdIntOptions = {
  nullable: true,
  defaultValue: "generalInt01",
  description: `represents the id of the card that you want to show and the default value is: generalInt01`,
};
export const CardIdStringOptions = {
  nullable: true,
  defaultValue: "generalString01",
  description: `represents the id of the card that you want to show and the default value is: generalString01`,
};
export const CardIdValuePrevOptions = {
  nullable: true,
  defaultValue: "generalValuePrev01",
  description: `represents the id of the card that you want to show and the default value is: generalValuePrev01`,
};
export const CardIdSmallOptions = {
  nullable: true,
  defaultValue: "communitySmall01",
  description: `represents the id of the card that you want to show and the default value is: communitySmall01`,
};
export const CardIdCompOptions = {
  nullable: true,
  defaultValue: "communityComp01",
  description: `represents the id of the card that you want to show and the default value is: communityComp01`,
};
export const CardIdBarOptions = {
  nullable: true,
  defaultValue: "communityBar01",
  description: `represents the id of the card that you want to show and the default value is: communityBar01`,
};
export const CardIdDonutOptions = {
  nullable: true,
  defaultValue: "communityDonutDetail01",
  description: `represents the id of the card that you want to show and the default value is: communityDonutDetail01`,
};
export const CardIdListPrevOptions = {
  nullable: true,
  defaultValue: "communityListPrev01",
  description: `represents the id of the card that you want to show and the default value is: communityListPrev01`,
};
export const CardIdListOptions = {
  nullable: true,
  defaultValue: "communityList01",
  description: `represents the id of the card that you want to show and the default value is: communityList01`,
};
export const CardIdTableOptions = {
  nullable: true,
  defaultValue: "activityTable01",
  description: `represents the id of the card that you want to show and the default value is: activityTable01`,
};
export const CardIdBubblesOptions = {
  nullable: true,
  defaultValue: "affinityBubbles01",
  description: `represents the id of the card that you want to show and the default value is: affinityBubbles01`,
};
export const CardIdPostOptions = {
  nullable: true,
  defaultValue: "contentPost01",
  description: `represents the id of the card that you want to show and the default value is: contentPost01`,
};
export const CardIdtitleTextOptions = {
  nullable: true,
  defaultValue: "conversationTitleText01",
  description: `represents the id of the card that you want to show and the default value is: conversationTitleText01`,
};
export const CardIdGeoOptions = {
  nullable: true,
  defaultValue: "communityGeo01",
  description: `represents the id of the card that you want to show and the default value is: communityGeo01`,
};
export const topPeopleOptions = {
  nullable: true,
  defaultValue: "communityTop01",
  description: `represents the id of the card that you want to show and the default value is: communityTop01`,
};
export const desktopOptions = {
  nullable: true,
  defaultValue: "communityDesktop01",
  description: `represents the id of the card that you want to show and the default value is: communityDesktop01`,
};
//Options trends

export const CardIdSmallTrOptions = {
  nullable: true,
  defaultValue: "generalSmail01",
  description: `represents the id of the card that you want to show and the default value is: generalSmail01`,
};
export const CardIdCompTrOptions = {
  nullable: true,
  defaultValue: "geenralComp01",
  description: `represents the id of the card that you want to show and the default value is: geenralComp01`,
};
export const CardIdListPrevTrOptions = {
  nullable: true,
  defaultValue: "generalListPrev01",
  description: `represents the id of the card that you want to show and the default value is: generalListPrev01`,
};
export const CardIdListTrOptions = {
  nullable: true,
  defaultValue: "generalList01",
  description: `represents the id of the card that you want to show and the default value is: generalList01`,
};
export const CardIdGeoTrOptions = {
  nullable: true,
  defaultValue: "generalGeo01",
  description: `represents the id of the card that you want to show and the default value is: generalGeo01`,
};
//options para Nw
export const CardIdStringNwOptions = {
  nullable: true,
  defaultValue: "generalString01",
  description: `represents the id of the card that you want to show and the default value is: generalString01`,
};
export const CardIdPostNwOptions = {
  nullable: true,
  defaultValue: "geenralPost01",
  description: `represents the id of the card that you want to show and the default value is: geenralPost01`,
};
//IsNull
export const IsNull = {
  nullable: true,
};
//not null
export const NotNull = {
  nullable: false,
};
