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
  desktopCard,
  postYt,
} from "../../common/Common";
import { youtubeIn } from "../../../interfaces/pulse/youtube/index";
@ObjectType()
export class Youtube implements youtubeIn {
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
  @Field((type) => [postYt], IsNull)
  postCard: [postYt];
  @Field((type) => titleText, IsNull)
  titleTextCard: titleText;
  @Field((type) => [geoCard], IsNull)
  geoCard: [geoCard];
  @Field((type) => [desktopCard], IsNull)
  desktopCard: [desktopCard];
}
