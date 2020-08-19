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
  postFB,
  titleText,
  geoCard,
} from "../../common/Common";
import { facebookIn } from "../../../interfaces/pulse/facebook/index";
@ObjectType()
export class Facebook implements facebookIn {
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
  @Field((type) => [postFB], IsNull)
  postCard: [postFB];
  @Field((type) => titleText, IsNull)
  titleTextCard: titleText;
  @Field((type) => [geoCard], IsNull)
  geoCard: [geoCard];
}
