import "reflect-metadata";
import { Resolver, FieldResolver,Ctx,Arg} from 'type-graphql'
import { Facebook } from "../../../schema/pulse/facebook/index";
import { PeriodType,CardIdIntFbType, CardIdStringFbType, CardIdValuePrevFbType } from '../../../schema/common/Enums'
import { PeriodOptions,DateEndOptions,CardIdIntOptions, CardIdStringOptions, CardIdValuePrevOptions} from '../../../schema/common/Options'
import { CardService } from '../../../services/pulse/facebook/index'
@Resolver(of => Facebook)
export class PulseFacebookResolver {

    @FieldResolver()
    test(@Ctx() ctx:any){ return  "Hola Mundo"}
    @FieldResolver()
    intCard(
        @Ctx() ctx:any,
        @Arg("period",type=>PeriodType,PeriodOptions) period?: PeriodType, 
        @Arg("date",DateEndOptions) date? :String,
        @Arg("cardId",type=>CardIdIntFbType,CardIdIntOptions) cardId?: CardIdIntFbType,
        ){
    return CardService(ctx,period,date,cardId)
    }
    @FieldResolver()
    stringCard(
        @Ctx() ctx:any,
        @Arg("period",type=>PeriodType,PeriodOptions) period?: PeriodType, 
        @Arg("date",DateEndOptions) date? :String,
        @Arg("cardId",type=>CardIdStringFbType,CardIdStringOptions) cardId?: CardIdStringFbType,
        ){
    return "Test"
    }
    @FieldResolver()
    valuePrevCard(
        @Ctx() ctx:any,
        @Arg("period",type=>PeriodType,PeriodOptions) period?: PeriodType, 
        @Arg("date",DateEndOptions) date? :String,
        @Arg("cardId",type=>CardIdValuePrevFbType,CardIdValuePrevOptions) cardId?: CardIdValuePrevFbType,
        ){
    return {
        value: 5,
        diff: 3
    }
    }
}

