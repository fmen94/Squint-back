import { ObjectType, Field } from "type-graphql";
import { IsNull } from "../../common/Options";
import {
  nameValueDiff,
  kindDateValue,
  kindNameValue,
  idList,
} from "../../common/Common";
import { instagramBenchIn } from "../../../interfaces/bench/instagram";
@ObjectType()
export class InstagramBench implements instagramBenchIn {
  @Field((type) => [[[kindNameValue]]], IsNull)
  tableCard: [[[kindNameValue]]];
  @Field((type) => [nameValueDiff], IsNull)
  prebsValuesCard: [nameValueDiff];
  @Field((type) => [nameValueDiff], IsNull)
  compCard: [nameValueDiff];
  @Field((type) => [kindDateValue], IsNull)
  bubblesCard: [kindDateValue];
  @Field((type) => [idList], IsNull)
  listCard: [idList];
}
