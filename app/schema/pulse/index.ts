import { ObjectType, Field } from 'type-graphql';
import { Facebook } from './facebook/index'
import { IsNull } from '../common/Options';
@ObjectType()
export class Pulse {
   @Field(type => Facebook,IsNull)
    facebook: Facebook
   }
