import { IPageInfo } from './youtube/page-info.model';
import { IResponseItem } from './youtube/response-item.model';

export interface IYouTubeResponse {
  kind: string;
  etag: string;
  pageInfo: IPageInfo;
  items: IResponseItem[];
}
