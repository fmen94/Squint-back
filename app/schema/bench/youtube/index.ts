import { ObjectType, Field } from "type-graphql";
import { IsNull } from "../../common/Options";
import {
  nameValueDiff,
  kindDateValue,
  kindNameValue,
  idList,
} from "../../common/Common";
import { youtubeBenchIn } from "../../../interfaces/bench/youtube";
@ObjectType()
export class YoutubeBench implements youtubeBenchIn {
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
