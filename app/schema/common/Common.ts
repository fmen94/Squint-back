import { ObjectType, Field, Float } from 'type-graphql';
import { IsNull } from './Options';


@ObjectType()
export class valueDiff{
    @Field(IsNull)
    value: Number
   @Field(IsNull)
   diff: Number
   }