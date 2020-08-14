
interface valueDiffIn {
    value: Number
    diff: Number
}
interface dateValueIn {
    date: String
    value: Number
}
interface smailCardIn {
    valuesArray: dateValueIn[]
    valueInt: number
    diff: number
}
interface kindIntValuesIn {
    valuesArray: Number[]
    kind: String
}
interface kindValueIn {
    value: Number
    kind: String
}
interface donutDetailIn {
    title: string
    subtitle: string
    text: string
    valuesArray: kindValueIn[]
}
interface nameValueDiffIn {
    name: String
    value: Number
    diff: Number
}
interface kindDateValueIn {
    kind: String
    date: String
    value: Number
}
interface kindNameValueIn {
    kind: String
    name: String
    value: Number
}
interface postFbIn {
    performance: String
    pageName: String
    pageImage: String
    date: String
    type: String
    text: String
    mediaUrl: String
    postUrl: String
    impressions: Number
    reach: Number
    interactions: Number
    like: Number
    love: Number
    care: Number
    haha: Number
    wow: Number
    sad: Number
    angry: Number
    comments: Number
    clicks: Number
    shares: Number
    feedbacks: Number
}
interface titleTextIn {
    title: String
    text: String
}



