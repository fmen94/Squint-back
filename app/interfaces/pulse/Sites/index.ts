import {
  donutDetailIn,
  kindDateValueIn,
  kindIntValuesIn,
  kindNameValueIn,
  kindValueIn,
  nameValueDiffIn,
  postFbIn,
  smailCardIn,
  titleTextIn,
  valueDiffIn,
  geoCardIn,
} from "../../common";

export interface ReadSitesTopSectionSectionResponse{
  metric_timestamp: number;
  system_timestamp: number;
  Global_Ranking: number;
	Local_Ranking: number;
	Category_Ranking: number;
	Bounce_Rate: number;
	Sessions_Per_User: number;
	Sessions_Average_Time: String;
}


export interface ReadSitesPulsePostSectionResponse{
  metric_timestamp: number;
  system_timestamp: number;
  Users_Unique_Visits: number;
  Sessions_Totals_Visits: number;
  Bounce_Rate: number;
  Convertion_Rate: number;
  New_Users: number;
  System_Metric_Date: String
  Reach_Rank: number;
  Reach_Per_Millon: number;
  Page_Views_Rank: number;
  Page_Views_Per_Millon: number;
}


export interface ReadSitesPulseTrafficSectionResponse{
  metric_timestamp: number;
  system_timestamp: number;
  Traffic_Organic: number;
  Traffic_Social: number;
  Traffic_Referal: number;
  Traffic_SEO: number;
  Traffic_SEM: number;
  Traffic_Display: number;
  Traffic_OLV: number;
  Traffic_Email: number;
  System_Metric_Date: String;
}


export interface ReadSitesPulseSourceSectionResponse{
  Origen: String;
  Cantidad: Number;
  Tipo: String;
}


export interface ReadSitesPulseTrafficByCountrySectionResponse{
  Traffic_Country: String
  Traffic_Rank: Number;
  Traffic_Page_Views: Number;
  Traffic_Views_Per_User: Number;
}


export interface ReadSitesPulseGenderSectionResponse {
  genero: string;
  age: string;
  cantidad: number;
}


export interface ReadSitesPulseAudienceSectionResponse{
  Origen: String;
  Cantidad: Number;
  Tipo: String;
}

export interface ReadSitesPulseFansCountrySectionResponse {
  Pais: string;
  Cantidad: number;
}


export interface ReadSitesPulseSubdomainsSectionResponse {
	Subdominains: String;
	Reach: Number;
	Page_Views: Number;
	Page_Views_Per_User: Number;
}


export interface ReadSitesPulseDomainsTrafficHistorySectionResponse {
	metric_timestamp: number;
  system_timestamp: number;
	Global_Rank: Number;
	Reach_Per_Millon: Number;
	Page_Views_Per_Millon: Number;
	Page_Views_Per_User: Number;
}


export interface ReadTrafficPerformanceSectionResponse {
  Traffic_Performance_Name: String;
  Traffic_Performance_Spend: Number;
  Traffic_Performance_Impression: Number;
  Traffic_Performance_Video_Views: Number;
  Traffic_Performance_Reach: Number;
  Traffic_Performance_Frecuency: Number;
  Traffic_Performance_Interactions: Number;
  Traffic_Performance_Clicks: Number;
  Traffic_Performance_CTR: Number;
  Traffic_Performance_CPC: Number;
}

