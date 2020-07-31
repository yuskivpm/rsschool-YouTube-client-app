import { PageInfo } from './youtube/page-info.model';
import { ResponseItem } from './youtube/response-item.model';

export interface YoutubeResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: ResponseItem[];
}
