import { youtubeIn } from "./youtube/index";
import { instagramIn } from "./instagram/index";
import { facebookIn } from "./facebook";
import { trendsIn } from "./trends";
import { newsIn } from "./news";

export interface pulseIn {
  facebook: facebookIn;
  instagram: instagramIn;
  youtube: youtubeIn;
  trends: trendsIn;
  news: newsIn;
}
