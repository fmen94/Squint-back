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
  page_video_views: number;
  page_video_views_10s: number;
  page_video_views_30s: number;
  page_impressions_organic: number;
  page_impressions_paid: number;
  page_impressions_viral: number;
  page_views_external_referrals: Array<KeyValue>
  page_fans_by_like_source: Array<KeyValue>;
}

export interface PostResponse{
  post_timestamp: number;
  system_timestamp: number;
  page_id: string;
  post_id: string;
  post_image: string;
  post_promotion_status: string;
  post_content: string;
  post_impressions: number;
  post_video_views: number;
  post_clicks: number;
  post_type: string;
  post_author_name: string;
  post_author_picture: string;
  post_reactions_like_total: number;
  post_reactions_love_total: number;
  post_reactions_wow_total: number;
  post_reactions_haha_total: number;
  post_reactions_sorry_total: number;
  post_reactions_anger_total: number;
  post_comments_count: number;
  post_shares_count: number;
  post_engaged_users: number;
  post_reactions_count: number;
}

export interface ReadReactionsSectionResponse{
  metric_timestamp: number;
  system_timestamp: number;
  page_reactions_like : number;
  page_reactions_love : number,
  page_reactions_haha : number,
  page_reactions_wow : number,
  page_reactions_sorry : number,
  page_reactions_anger : number,
  page_message_count : number,
  page_clics : number
  page_positive_feedback_by_type : Array<KeyValue>,
  page_negative_feedback_by_type : Array<KeyValue>
}

export interface ReadBestMomentsSectionResponse{
    metric_timestamp: number;
    system_timestamp: number;
    page_views_external_referrals: Array<KeyValue>
    page_fans_by_like_source: Array<KeyValue>;
  }
  
