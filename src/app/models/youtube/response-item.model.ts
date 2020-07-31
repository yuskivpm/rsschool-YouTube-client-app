import { Snippet } from './snippet.model';
import { Statistics } from './statistics.model';

export interface ResponseItem {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}
