import {
  idListIn,
  kindDateValueIn,
  kindNameValueIn,
  nameValueDiffIn,
} from "../../common";

export interface facebookBenchIn {
  tableCard: [[[kindNameValueIn]]];
  prebsValuesCard: [kindNameValueIn];
  compCard: [nameValueDiffIn];
  bubblesCard: [kindDateValueIn];
  listCard: [idListIn];
}
