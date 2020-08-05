import { IResponseItem } from './response-item.model';

interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface IYouTubeResponse {
  kind: string;
  etag: string;
  pageInfo: IPageInfo;
  items: IResponseItem[];
}
