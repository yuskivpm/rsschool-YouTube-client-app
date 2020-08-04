import { ISnippet } from './snippet.model';
import { IStatistics } from './statistics.model';

export interface IResponseItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
  statistics: IStatistics;
}
