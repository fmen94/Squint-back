import { ObjectType, Field } from 'type-graphql';
import { IsNull } from '../../common/Options';
import { valueDiff } from '../../common/Common'

@ObjectType()
export class Facebook {
   @Field(IsNull)
    test: String
    @Field(IsNull)
    intCard: Number
    @Field(IsNull)
    stringCard: String
    @Field(type => valueDiff,IsNull)
    valuePrevCard: valueDiff
   }