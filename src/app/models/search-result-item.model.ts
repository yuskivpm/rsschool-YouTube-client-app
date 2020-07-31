import { Statistics } from './youtube/statistics.model';

export interface SearchResultItem {
  imageUrl: string;
  title: string;
  statistics: Statistics;
}
