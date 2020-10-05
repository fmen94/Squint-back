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

export interface trendsIn {
  intCard: Number;
  smallCard: smailCardIn;
  compCard: [nameValueDiffIn];
  listPrevCard: [nameValueDiffIn];
  geoCard: [geoCardIn];
  listCard: [kindValueIn];
}
