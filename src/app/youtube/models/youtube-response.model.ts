import { IResponseItem } from './response-item.model';

interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface IYouTubeResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  regionCode?: string;
  pageInfo: IPageInfo;
  items: IResponseItem[];
}
