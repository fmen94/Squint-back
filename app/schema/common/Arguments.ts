import {  InputType,Field } from "type-graphql";
import { Length , Matches, Min, Max, IsEnum} from "class-validator";
import { IsNull, PeriodOptions } from './Options'
import { PeriodType } from './Enums'

@InputType()
export class DateRange {
    @Length(19,19,{message: 'The date does not match the length of 19'})  
    @Matches(/(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](20)\d\d[T](((([0-1][0-9])|(2[0-3])):?[0-5][0-9]:?[0-5][0-9]+$))/,
    { message: 'The date does not contain the proper format, the proper format is "DD-MM-YYYYThh: mm: ss"'})
    @Field(IsNull)
    date: string
    @Field(type=>PeriodType ,PeriodOptions)
    @IsEnum(PeriodType)
    period:PeriodType
}



