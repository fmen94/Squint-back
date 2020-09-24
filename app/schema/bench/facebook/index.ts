import { ObjectType, Field } from "type-graphql";
import { IsNull } from "../../common/Options";
import {
  nameValueDiff,
  kindDateValue,
  kindNameValue,
  idList,
} from "../../common/Common";
import { facebookBenchIn } from "../../../interfaces/bench/facebook";
@ObjectType()
export class FacebookBench implements facebookBenchIn {
  @Field((type) => [[[kindNameValue]]], IsNull)
  tableCard: [[[kindNameValue]]];
  @Field((type) => [kindNameValue], IsNull)
  prebsValuesCard: [kindNameValue];
  @Field((type) => [nameValueDiff], IsNull)
  compCard: [nameValueDiff];
  @Field((type) => [kindDateValue], IsNull)
  bubblesCard: [kindDateValue];
  @Field((type) => [idList], IsNull)
  listCard: [idList];
}
