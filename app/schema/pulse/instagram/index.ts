import { ObjectType, Field } from "type-graphql";
import { IsNull } from "../../common/Options";
import {
  valueDiff,
  kindIntValues,
  smailCard,
  donutDetail,
  nameValueDiff,
  kindValue,
  kindDateValue,
  kindNameValue,
  titleText,
  geoCard,
  postIG,
} from "../../common/Common";
import { instagramIn } from "../../../interfaces/pulse/instagram";
@ObjectType()
export class instagram implements instagramIn {
  @Field(IsNull)
  intCard: Number;
  @Field(IsNull)
  stringCard: String;
  @Field((type) => valueDiff, IsNull)
  valuePrevCard: valueDiff;
  @Field((type) => smailCard, IsNull)
  smallCard: smailCard;
  @Field((type) => [nameValueDiff], IsNull)
  compCard: [nameValueDiff];
  @Field((type) => [kindIntValues], IsNull)
  barCard: [kindIntValues];
  @Field((type) => donutDetail, IsNull)
  donutDetailCard: donutDetail;
  @Field((type) => [nameValueDiff], IsNull)
  listPrevCard: [nameValueDiff];
  @Field((type) => [kindValue], IsNull)
  listCard: [kindValue];
  @Field((type) => [[[kindNameValue]]], IsNull)
  tableCard: [[[kindNameValue]]];
  @Field((type) => [kindDateValue], IsNull)
  bubblesCard: [kindDateValue];
  @Field((type) => [postIG], IsNull)
  postCard: [postIG];
  @Field((type) => titleText, IsNull)
  titleTextCard: titleText;
  @Field((type) => [geoCard], IsNull)
  geoCard: [geoCard];
  @Field((type) => [geoCard], IsNull)
  topPeople: [geoCard];
}
