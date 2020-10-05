import { InputType, Field } from "type-graphql";
import { Length, Matches, Min, Max, IsEnum, IsInt } from "class-validator";
import { NotNull, PeriodOptions, Options } from "./Options";
import { OrderType, PeriodType } from "./Enums";
import { DataOptionsIn, DateRangeIn } from "../../interfaces/common/anguments";
/**
 * Esta clase es una entrada de datos graph (argumento), un objeto de date period
 */
@InputType()
export class DateRange implements DateRangeIn {
  /*@Length(19, 19, { message: "The date does not match the length of 19" })
  @Matches(
    /(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](20)\d\d[T](((([0-1][0-9])|(2[0-3])):?[0-5][0-9]:?[0-5][0-9]+$))/,
    {
      message:
        'The date does not contain the proper format, the proper format is "DD-MM-YYYYThh: mm: ss"',
    }
  )*/
  @Field(NotNull)
  date: number;
  @Field((type) => PeriodType, PeriodOptions)
  @IsEnum(PeriodType)
  period: PeriodType;
}

@InputType()
export class DataOptions implements DataOptionsIn {
  @IsInt()
  @Min(1, { message: "The limit must be greater than 1" })
  @Max(10, { message: "The limit must be less than 100" })
  @Field(NotNull)
  limit: number;

  @IsEnum(OrderType)
  @Field((type) => OrderType, Options("ASC"))
  order: OrderType;
}
