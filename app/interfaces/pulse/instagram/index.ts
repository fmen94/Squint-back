import { geoCard } from "./../../../schema/common/Common";
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
  postIGIn,
  topPeopleIn,
} from "../../common";

export interface instagramIn {
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
  postCard: [postIGIn];
  titleTextCard: titleTextIn;
  geoCard: [geoCardIn];
  topPeople: [topPeopleIn];
}
