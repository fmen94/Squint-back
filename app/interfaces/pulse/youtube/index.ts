import {
  donutDetailIn,
  kindDateValueIn,
  kindIntValuesIn,
  kindNameValueIn,
  kindValueIn,
  nameValueDiffIn,
  smailCardIn,
  titleTextIn,
  valueDiffIn,
  geoCardIn,
  desktopIn,
  postYtIn,
} from "../../common";

export interface youtubeIn {
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
  postCard: [postYtIn];
  titleTextCard: titleTextIn;
  geoCard: [geoCardIn];
  desktopCard: [desktopIn];
}
