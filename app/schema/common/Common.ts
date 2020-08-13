import { ObjectType, Field, createUnionType } from 'type-graphql';
import { IsNull } from './Options';


    @ObjectType()
    export class valueDiff{
        @Field(IsNull)
         value: Number
        @Field(IsNull)
         diff: Number
    }

    @ObjectType()
    export class dateValue{
        @Field(IsNull)
         date: String
        @Field(IsNull)
         value: number 
    }

    @ObjectType()
    export class smailCard{
        @Field(type=>[dateValue],IsNull)
        valuesArray: [dateValue]
        @Field(IsNull)
        valueInt: number 
        @Field(IsNull)
        diff: number
    }

    @ObjectType()
    export class nameValuesDiffs{
        @Field(type=>[valueDiff],IsNull)
        chartLineData: [valueDiff]
        @Field(IsNull)
        name: String 
    }

    @ObjectType()
    export class compCard{
        @Field(type=>[nameValuesDiffs],IsNull)
        data: [nameValuesDiffs]
        @Field(type=>[String],IsNull)
        xLabels: [String]
    }
    @ObjectType()
    export class kindIntValues{
        @Field(type=>[Number],IsNull)
        valuesArray: [Number]
        @Field(IsNull)
        kind: String
    }

    @ObjectType()
    export class kindValue{
        @Field(IsNull)
        value: Number
        @Field(IsNull)
        kind: String
    }

    @ObjectType()
    export class donutDetail{
        @Field(IsNull)
        title: string
        @Field(IsNull)
        subtitle: string
        @Field(IsNull)
        text: string
        @Field(type=>[kindValue],IsNull)
        valuesArray: [kindValue]
    }
    @ObjectType()
    export class nameValueDiff{
        @Field(IsNull)
         name: String
        @Field(IsNull)
         value: Number
        @Field(IsNull)
         diff: Number
    }
    @ObjectType()
    export class kindDateValue{
        @Field(IsNull)
         kind: String
        @Field(IsNull)
         date: String
        @Field(IsNull)
         value: Number
    }
    @ObjectType()
    export class kindNameValue {
        @Field(IsNull)
         kind: String
         @Field(IsNull)
         name: String
         @Field(IsNull)
         value: Number
    }
    @ObjectType()
    export class postFB{
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