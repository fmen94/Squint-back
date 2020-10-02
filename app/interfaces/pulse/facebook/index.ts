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

export interface facebookIn {
  intCard: Number;
  stringCard: String;
  valuePrevCard: valueDiffIn;
  smallCard: smailCardIn;
  compCard: [nameValueDiffIn];
  barCard: [kindIntValuesIn];
  donutDetailCard: donutDetailIn;
  listPrevCard: [nameValueDiffIn];
  listCard: [kindValueIn];
  tableCard: [[[kindNameValueIn]]];
  bubblesCard: [kindDateValueIn];
  postCard: [postFbIn];
  titleTextCard: titleTextIn;
  geoCard: [geoCardIn];
}

export interface KeyValue{key:string,value:number}

export interface ReadTopSectionResponse{
  metric_timestamp: number;
  system_timestamp: number;
  page_fans: number;
  page_fans_organic: number;
  page_fans_paid: number;
  page_impressions: number;
  page_impressions_organic: number;
  page_impressions_paid: number;
  page_impressions_unique: number;
  page_impressions_viral: number;
  page_content_activity: number;
  page_post_engagements: number;
  page_engaged_users: number;
  page_message_count: number;
  page_video_views: number;
  page_clics: number;
  page_reactions_total: Array<KeyValue>,
  page_positive_feedback_by_type: Array<KeyValue>,
  page_fans_by_like_source: Array<KeyValue>
}

export interface ReadTopSectionPageInfoResponse{
  system_timestamp: number;
  global_account: {
    name: string|null;
    id: string|null;
    fans: number|null;
  },
  fan_count: number;
}

export interface ReadDetailsSectionResponse{
  metric_timestamp: number;
  system_timestamp: number;
  page_impressions_unique: number;
  page_fan_adds: number;
  page_fan_removes: number;
}

export interface ReadCommunityGender {
  metric_timestamp: number;
  system_timestamp: number;
  page_fans_gender_age: Array<KeyValue>;
}

export interface ProcessedGender {
  genero: string;
  age: string;
  cantidad: number;
}

export interface ReadFanSourceSection {
  metric_timestamp: number;
  system_timestamp: number;
  page_views_external_referrals: Array<KeyValue>
  page_fans_by_like_source: Array<KeyValue>;
}