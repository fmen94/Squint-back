import "reflect-metadata";
import { Resolver, FieldResolver, Ctx, Arg } from 'type-graphql'
import { Facebook } from "../../../schema/pulse/facebook/index";
import { CardIdIntFbType, CardIdStringFbType, CardIdValuePrevFbType, CardIdListFbType, CardIdListPrevFbType, CardIdDonutFbType, CardIdBarFbType, CardIdCompFbType, CardIdSmallFbType, CardIdTableFbType, CardIdBubblesFbType, CardIdPostFbType, CardIdTitleTextFbType } from '../../../schema/common/Enums'
import { DateEndOptions, CardIdIntOptions, CardIdStringOptions, CardIdValuePrevOptions, CardIdDonutOptions, CardIdBarOptions, CardIdCompOptions, CardIdSmallOptions, CardIdListPrevOptions, CardIdListOptions, CardIdTableOptions, CardIdBubblesOptions, CardIdPostOptions, CardIdtitleTextOptions } from '../../../schema/common/Options'
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
import { titleTextCardService } from "../../../services/pulse/facebook/titleTextCard";
import { kindIntValues } from "../../../schema/common/Common";

/**
 * Este Resolver Contiene todos los todos que se puden usar para Facebook pulse.
 */
@Resolver(of => Facebook)
export class PulseFacebookResolver {
    @FieldResolver()
    intCard(
        @Ctx() ctx: any,
        @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
        @Arg("cardId", type => CardIdIntFbType, CardIdIntOptions) cardId?: CardIdIntFbType,
    ): Number {
        return intCardService(ctx, dateRange, cardId)
    }
    @FieldResolver()
    stringCard(
        @Ctx() ctx: any,
        @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
        @Arg("cardId", type => CardIdStringFbType, CardIdStringOptions) cardId?: CardIdStringFbType
    ): String {
        return stringCardService(ctx, dateRange, cardId)
    }
    @FieldResolver()
    valuePrevCard(
        @Ctx() ctx: any,
        @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
        @Arg("cardId", type => CardIdValuePrevFbType, CardIdValuePrevOptions) cardId?: CardIdValuePrevFbType
    ): valueDiffIn {
        return valuePrevCardService(ctx, dateRange, cardId)
    }
    @FieldResolver()
    smallCard(
        @Ctx() ctx: any,
        @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
        @Arg("cardId", type => CardIdSmallFbType, CardIdSmallOptions) cardId?: CardIdSmallFbType
    ): smailCardIn {
        return smallCardService(ctx, dateRange, cardId)
    }
    @FieldResolver()
    compCard(
        @Ctx() ctx: any,
        @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
        @Arg("cardId", type => CardIdCompFbType, CardIdCompOptions) cardId?: CardIdCompFbType
    ): nameValueDiffIn[] {
        return compCardService(ctx, dateRange, cardId)
    }
    @FieldResolver()
    barCard(
        @Ctx() ctx: any,
        @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
        @Arg("cardId", type => CardIdBarFbType, CardIdBarOptions) cardId?: CardIdBarFbType
    ): kindIntValuesIn[] {
        return barCardService(ctx, dateRange, cardId)
    }
    @FieldResolver()
    donutDetailCard(
        @Ctx() ctx: any,
        @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
        @Arg("cardId", type => CardIdDonutFbType, CardIdDonutOptions) cardId?: CardIdDonutFbType
    ): donutDetailIn {
        return donutDetailCardService(ctx, dateRange, cardId)
    }
    @FieldResolver()
    listPrevCard(
        @Ctx() ctx: any,
        @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
        @Arg("cardId", type => CardIdListPrevFbType, CardIdListPrevOptions) cardId?: CardIdListPrevFbType
    ): nameValueDiffIn[] {
        return listPrevCardService(ctx, dateRange, cardId)
    }
    @FieldResolver()
    listCard(
        @Ctx() ctx: any,
        @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
        @Arg("cardId", type => CardIdListFbType, CardIdListOptions) cardId?: CardIdListFbType
    ): kindValueIn[] {
        return listCardService(ctx, dateRange, cardId)
    }
    @FieldResolver()
    tableCard(
        @Ctx() ctx: any,
        @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
        @Arg("cardId", type => CardIdTableFbType, CardIdTableOptions) cardId?: CardIdTableFbType
    ): kindNameValueIn[][][] {
        return tableCardService(ctx, dateRange, cardId)
    }
    @FieldResolver()
    bubblesCard(
        @Ctx() ctx: any,
        @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
        @Arg("cardId", type => CardIdBubblesFbType, CardIdBubblesOptions) cardId?: CardIdBubblesFbType
    ): kindDateValueIn[] {
        return bubblesService(ctx, dateRange, cardId)
    }
    @FieldResolver()
    postCard(
        @Ctx() ctx: any,
        @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
        @Arg("cardId", type => CardIdPostFbType, CardIdPostOptions) cardId?: CardIdPostFbType
    ): postFbIn[] {
        return postCardService(ctx, dateRange, cardId)
    }
    @FieldResolver()
    titleTextCard(
        @Ctx() ctx: any,
        @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
        @Arg("cardId", type => CardIdTitleTextFbType, CardIdtitleTextOptions) cardId?: CardIdTitleTextFbType
    ): titleTextIn {
        return titleTextCardService(ctx, dateRange, cardId)
    }
}

