import "reflect-metadata";
import { Resolver, FieldResolver,Ctx,Arg} from 'type-graphql'
import { Facebook } from "../../../schema/pulse/facebook/index";
import { CardIdIntFbType,CardIdStringFbType,CardIdValuePrevFbType } from '../../../schema/common/Enums'
import {DateEndOptions,CardIdIntOptions, CardIdStringOptions, CardIdValuePrevOptions} from '../../../schema/common/Options'
import { intCardService } from '../../../services/pulse/facebook/intCard'
import { DateRange } from "../../../schema/common/Arguments";
import { stringCardService } from "../../../services/pulse/facebook/stringCard";
import { valuePrevCardService } from "../../../services/pulse/facebook/ValuePrevCard";
import { smallCardService } from "../../../services/pulse/facebook/smallCard";
import { compCardService } from "../../../services/pulse/facebook/compCard";


@Resolver(of => Facebook)
export class PulseFacebookResolver {
    @FieldResolver()
    intCard(
        @Ctx() ctx:any,
        @Arg("dateRange",DateEndOptions) dateRange? : DateRange,
        @Arg("cardId",type=>CardIdIntFbType,CardIdIntOptions) cardId?: CardIdIntFbType,
        ){
    return intCardService(ctx,dateRange,cardId)
    }
    @FieldResolver()
    stringCard(
        @Ctx() ctx:any,
        @Arg("dateRange",DateEndOptions) dateRange? : DateRange,
        @Arg("cardId",type=>CardIdStringFbType,CardIdStringOptions) cardId?: CardIdStringFbType
        ){
    return stringCardService(ctx,dateRange,cardId)
    }
    @FieldResolver()
    valuePrevCard(
        @Ctx() ctx:any,
        @Arg("dateRange",DateEndOptions) dateRange? : DateRange,
        @Arg("cardId",type=>CardIdValuePrevFbType,CardIdValuePrevOptions) cardId?: CardIdValuePrevFbType
        ){
    return valuePrevCardService(ctx,dateRange,cardId)
    }
    @FieldResolver()
    smallCard(
        @Ctx() ctx:any,
        @Arg("dateRange",DateEndOptions) dateRange? : DateRange,
        @Arg("cardId",type=>CardIdValuePrevFbType,CardIdValuePrevOptions) cardId?: CardIdValuePrevFbType
        ){
    return smallCardService(ctx,dateRange,cardId)
    }
    @FieldResolver()
    compCard(
        @Ctx() ctx:any,
        @Arg("dateRange",DateEndOptions) dateRange? : DateRange,
        @Arg("cardId",type=>CardIdValuePrevFbType,CardIdValuePrevOptions) cardId?: CardIdValuePrevFbType
        ){
    return compCardService(ctx,dateRange,cardId)
    }
    @FieldResolver()
    barCard(
        @Ctx() ctx:any,
        @Arg("dateRange",DateEndOptions) dateRange? : DateRange,
        @Arg("cardId",type=>CardIdValuePrevFbType,CardIdValuePrevOptions) cardId?: CardIdValuePrevFbType
        ){
    return valuePrevCardService(ctx,dateRange,cardId)
    }
    @FieldResolver()
    donutDetailCard(
        @Ctx() ctx:any,
        @Arg("dateRange",DateEndOptions) dateRange? : DateRange,
        @Arg("cardId",type=>CardIdValuePrevFbType,CardIdValuePrevOptions) cardId?: CardIdValuePrevFbType
        ){
    return valuePrevCardService(ctx,dateRange,cardId)
    }
    @FieldResolver()
    listPrevCard(
        @Ctx() ctx:any,
        @Arg("dateRange",DateEndOptions) dateRange? : DateRange,
        @Arg("cardId",type=>CardIdValuePrevFbType,CardIdValuePrevOptions) cardId?: CardIdValuePrevFbType
        ){
    return valuePrevCardService(ctx,dateRange,cardId)
    }
    @FieldResolver()
    listCard(
        @Ctx() ctx:any,
        @Arg("dateRange",DateEndOptions) dateRange? : DateRange,
        @Arg("cardId",type=>CardIdValuePrevFbType,CardIdValuePrevOptions) cardId?: CardIdValuePrevFbType
        ){
    return valuePrevCardService(ctx,dateRange,cardId)
    }
}

