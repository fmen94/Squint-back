import "reflect-metadata";
import { Resolver, FieldResolver,Ctx,Arg} from 'type-graphql'
import { Facebook } from "../../../schema/pulse/facebook/index";
import { CardIdIntFbType,CardIdStringFbType,CardIdValuePrevFbType, CardIdListFbType, CardIdListPrevFbType, CardIdDonutFbType, CardIdBarFbType, CardIdCompFbType, CardIdSmallFbType, CardIdTableFbType, CardIdBubblesFbType, CardIdPostFbType } from '../../../schema/common/Enums'
import {DateEndOptions,CardIdIntOptions, CardIdStringOptions, CardIdValuePrevOptions, CardIdDonutOptions, CardIdBarOptions, CardIdCompOptions, CardIdSmallOptions, CardIdListPrevOptions, CardIdListOptions, CardIdTableOptions, CardIdBubblesOptions, CardIdPostOptions} from '../../../schema/common/Options'
import { intCardService } from '../../../services/pulse/facebook/intCard'
import { DateRange } from "../../../schema/common/Arguments";
import { stringCardService } from "../../../services/pulse/facebook/stringCard";
import { valuePrevCardService } from "../../../services/pulse/facebook/ValuePrevCard";
import { smallCardService } from "../../../services/pulse/facebook/smallCard";
import { compCardService } from "../../../services/pulse/facebook/compCard";
import { barCardService } from "../../../services/pulse/facebook/barCard";
import { donutDetailCardService } from "../../../services/pulse/facebook/donutDetailCard";
import { listPrevCardService } from "../../../services/pulse/facebook/listPrevCard";
import { listCardService } from "../../../services/pulse/facebook/listCard";
import { bubblesService } from "../../../services/pulse/facebook/bubbleCards";
import { tableCardService } from "../../../services/pulse/facebook/tableCard";
import { postCardService } from "../../../services/pulse/facebook/postCard";

/**
 * Este Resolver Contiene todos los todos que se puden usar para Facebook pulse.
 */
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
        @Arg("cardId",type=>CardIdSmallFbType,CardIdSmallOptions) cardId?: CardIdSmallFbType
        ){
    return smallCardService(ctx,dateRange,cardId)
    }
    @FieldResolver()
    compCard(
        @Ctx() ctx:any,
        @Arg("dateRange",DateEndOptions) dateRange? : DateRange,
        @Arg("cardId",type=>CardIdCompFbType,CardIdCompOptions) cardId?: CardIdCompFbType
        ){
    return compCardService(ctx,dateRange,cardId)
    }
    @FieldResolver()
    barCard(
        @Ctx() ctx:any,
        @Arg("dateRange",DateEndOptions) dateRange? : DateRange,
        @Arg("cardId",type=>CardIdBarFbType,CardIdBarOptions) cardId?: CardIdBarFbType
        ){
    return barCardService(ctx,dateRange,cardId)
    }
    @FieldResolver()
    donutDetailCard(
        @Ctx() ctx:any,
        @Arg("dateRange",DateEndOptions) dateRange? : DateRange,
        @Arg("cardId",type=>CardIdDonutFbType,CardIdDonutOptions) cardId?: CardIdDonutFbType
        ){
    return donutDetailCardService(ctx,dateRange,cardId)
    }
    @FieldResolver()
    listPrevCard(
        @Ctx() ctx:any,
        @Arg("dateRange",DateEndOptions) dateRange? : DateRange,
        @Arg("cardId",type=>CardIdListPrevFbType,CardIdListPrevOptions) cardId?: CardIdListPrevFbType
        ){
    return listPrevCardService(ctx,dateRange,cardId)
    }
    @FieldResolver()
    listCard(
        @Ctx() ctx:any,
        @Arg("dateRange",DateEndOptions) dateRange? : DateRange,
        @Arg("cardId",type=>CardIdListFbType,CardIdListOptions) cardId?: CardIdListFbType
        ){
    return listCardService(ctx,dateRange,cardId)
    }
    @FieldResolver()
    tableCard(
        @Ctx() ctx:any,
        @Arg("dateRange",DateEndOptions) dateRange? : DateRange,
        @Arg("cardId",type=>CardIdTableFbType,CardIdTableOptions) cardId?: CardIdTableFbType
        ){
    return tableCardService(ctx,dateRange,cardId)
    }
    @FieldResolver()
    bubblesCard(
        @Ctx() ctx:any,
        @Arg("dateRange",DateEndOptions) dateRange? : DateRange,
        @Arg("cardId",type=>CardIdBubblesFbType,CardIdBubblesOptions) cardId?: CardIdBubblesFbType
        ){
    return bubblesService(ctx,dateRange,cardId)
    }
    @FieldResolver()
    postCard(
        @Ctx() ctx:any,
        @Arg("dateRange",DateEndOptions) dateRange? : DateRange,
        @Arg("cardId",type=>CardIdPostFbType,CardIdPostOptions) cardId?: CardIdPostFbType
        ){
    return postCardService(ctx,dateRange,cardId)
    }
}

