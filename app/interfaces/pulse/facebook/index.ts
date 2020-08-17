import { donutDetailIn, kindDateValueIn, kindIntValuesIn, kindNameValueIn, kindValueIn, nameValueDiffIn, postFbIn, smailCardIn, titleTextIn, valueDiffIn } from "../../common";

export interface facebookIn {
    intCard: Number
    stringCard: String
    valuePrevCard: valueDiffIn
    smallCard: smailCardIn
    compCard: [nameValueDiffIn]
    barCard: [kindIntValuesIn]
    donutDetailCard: donutDetailIn
    listPrevCard: [nameValueDiffIn]
    listCard: [kindValueIn]
    tableCard: [[[kindNameValueIn]]]
    bubblesCard: [kindDateValueIn]
    postCard: [postFbIn]
    titleTextCard: titleTextIn
}