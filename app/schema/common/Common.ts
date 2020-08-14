import { ObjectType, Field, createUnionType } from 'type-graphql';
import { IsNull } from './Options';


@ObjectType()
export class valueDiff implements valueDiffIn {
    @Field(IsNull)
    value: Number
    @Field(IsNull)
    diff: Number
}

@ObjectType()
export class dateValue implements dateValueIn {
    @Field(IsNull)
    date: String
    @Field(IsNull)
    value: number
}

@ObjectType()
export class smailCard implements smailCardIn {
    @Field(type => [dateValue], IsNull)
    valuesArray: [dateValue]
    @Field(IsNull)
    valueInt: number
    @Field(IsNull)
    diff: number
}
@ObjectType()
export class kindIntValues implements kindIntValuesIn {
    @Field(type => [Number], IsNull)
    valuesArray: [Number]
    @Field(IsNull)
    kind: String
}

@ObjectType()
export class kindValue implements kindValueIn {
    @Field(IsNull)
    value: Number
    @Field(IsNull)
    kind: String
}

@ObjectType()
export class donutDetail implements donutDetailIn {
    @Field(IsNull)
    title: string
    @Field(IsNull)
    subtitle: string
    @Field(IsNull)
    text: string
    @Field(type => [kindValue], IsNull)
    valuesArray: [kindValue]
}
@ObjectType()
export class nameValueDiff implements nameValueDiff {
    @Field(IsNull)
    name: String
    @Field(IsNull)
    value: Number
    @Field(IsNull)
    diff: Number
}
@ObjectType()
export class kindDateValue implements kindDateValueIn {
    @Field(IsNull)
    kind: String
    @Field(IsNull)
    date: String
    @Field(IsNull)
    value: Number
}
@ObjectType()
export class kindNameValue implements kindNameValueIn {
    @Field(IsNull)
    kind: String
    @Field(IsNull)
    name: String
    @Field(IsNull)
    value: Number
}
@ObjectType()
export class postFB implements postFbIn {
    @Field(IsNull)
    performance: String
    @Field(IsNull)
    pageName: String
    @Field(IsNull)
    pageImage: String
    @Field(IsNull)
    date: String
    @Field(IsNull)
    type: String
    @Field(IsNull)
    text: String
    @Field(IsNull)
    mediaUrl: String
    @Field(IsNull)
    postUrl: String
    @Field(IsNull)
    impressions: Number
    @Field(IsNull)
    reach: Number
    @Field(IsNull)
    interactions: Number
    @Field(IsNull)
    like: Number
    @Field(IsNull)
    love: Number
    @Field(IsNull)
    care: Number
    @Field(IsNull)
    haha: Number
    @Field(IsNull)
    wow: Number
    @Field(IsNull)
    sad: Number
    @Field(IsNull)
    angry: Number
    @Field(IsNull)
    comments: Number
    @Field(IsNull)
    clicks: Number
    @Field(IsNull)
    shares: Number
    @Field(IsNull)
    feedbacks: Number
}
@ObjectType()
export class titleText implements titleTextIn {
    @Field(IsNull)
    title: String
    @Field(IsNull)
    text: String
}