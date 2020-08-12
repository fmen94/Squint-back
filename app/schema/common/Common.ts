import { ObjectType, Field, Float } from 'type-graphql';
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