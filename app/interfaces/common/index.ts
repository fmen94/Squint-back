export interface valueDiffIn {
  value: Number;
  diff: Number;
}
export interface dateValueIn {
  date: String;
  value: Number;
}
export interface smailCardIn {
  valuesArray: dateValueIn[];
  valueInt: number;
  diff: number;
}
export interface kindIntValuesIn {
  valuesArray: Number[];
  kind: String;
}
export interface kindValueIn {
  value: Number;
  kind: String;
}
export interface donutDetailIn {
  title: string;
  subtitle: string;
  text: string;
  valuesArray: kindValueIn[];
}
export interface nameValueDiffIn {
  name: String;
  value: Number;
  diff: Number;
}
export interface kindDateValueIn {
  kind: String;
  date: String;
  value: Number;
}
export interface kindNameValueIn {
  kind: String;
  name: String;
  value: Number;
}
export interface postFbIn {
  performance: String;
  pageName: String;
  pageImage: String;
  date: String;
  type: String;
  text: String;
  mediaUrl: String;
  postUrl: String;
  impressions: Number;
  reach: Number;
  interactions: Number;
  like: Number;
  love: Number;
  care: Number;
  haha: Number;
  wow: Number;
  sad: Number;
  angry: Number;
  comments: Number;
  clicks: Number;
  shares: Number;
  feedbacks: Number;
}
export interface titleTextIn {
  title: String;
  text: String;
}
export interface cityIn {
  id?: String;
  position?: Number;
  diff?: Number;
  value?: Number;
  country?: String;
  name?: String;
  lat?: String;
  lng?: String;
}
export interface geoCardIn {
  id?: String;
  iso_a2?: String;
  iso_a3?: String;
  position?: Number;
  name?: String;
  diff?: Number;
  value?: Number;
  cities?: cityIn;
}
export interface postIGIn {
  performance: String;
  pageName: String;
  pageImage: String;
  date: String;
  type: String;
  text: String;
  mediaUrl: String;
  postUrl: String;
  impressions: Number;
  reach: Number;
  engagementRate: Number;
  interactions: Number;
  views: Number;
  clicks: Number;
  shares: Number;
  saved: Number;
}
export interface topPeopleIn {
  position?: Number;
  image?: String;
  name?: String;
  followers?: Number;
  likes?: Number;
}
