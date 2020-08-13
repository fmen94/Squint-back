import { ObjectType, Field } from 'type-graphql';
import { IsNull } from '../../common/Options';
import { valueDiff, kindIntValues, smailCard, compCard, donutDetail, nameValueDiff, kindValue, kindDateValue, kindNameValue, postFB } from '../../common/Common'

@ObjectType()
export class Facebook {
    @Field(IsNull)
    intCard: Number
    @Field(IsNull)
    stringCard: String
    @Field(type => valueDiff,IsNull)
    valuePrevCard: valueDiff
    @Field(type => smailCard,IsNull)
    smallCard: smailCard
    @Field(type => compCard,IsNull)
    compCard: compCard
    @Field(type => [kindIntValues],IsNull)
    barCard: [kindIntValues]
    @Field(type => donutDetail,IsNull)
    donutDetailCard: donutDetail
    @Field(type => [nameValueDiff],IsNull)
    listPrevCard: [nameValueDiff]
    @Field(type => [kindValue],IsNull)
    listCard: [kindValue]
    @Field(type => [[[kindNameValue]]],IsNull)
    tableCard: [[[kindNameValue]]]
    @Field(type => [kindDateValue],IsNull)
    bubblesCard: [kindDateValue] 
    @Field(type => [postFB],IsNull)
    postCard: [postFB] 
   }