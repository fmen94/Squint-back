import {
  idListIn,
  kindDateValueIn,
  kindNameValueIn,
  nameValueDiffIn,
} from "../../common";

export interface youtubeBenchIn {
  tableCard: [[[kindNameValueIn]]];
  prebsValuesCard: [nameValueDiffIn];
  compCard: [nameValueDiffIn];
  bubblesCard: [kindDateValueIn];
  listCard: [idListIn];
}
