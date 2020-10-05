import {
  idListIn,
  kindDateValueIn,
  kindNameValueIn,
  nameValueDiffIn,
} from "../../common";

export interface facebookBenchIn {
  tableCard: [[[kindNameValueIn]]];
  prebsValuesCard: [nameValueDiffIn];
  compCard: [nameValueDiffIn];
  bubblesCard: [kindDateValueIn];
  listCard: [idListIn];
}
