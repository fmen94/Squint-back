import { ObjectType, Field } from 'type-graphql';
import { Facebook } from './facebook/index'
import { IsNull } from '../common/Options';
import { pulseIn } from '../../interfaces/pulse';
@ObjectType()
export class Pulse implements pulseIn {
   @Field(type => Facebook,IsNull)
    facebook: Facebook
   }
