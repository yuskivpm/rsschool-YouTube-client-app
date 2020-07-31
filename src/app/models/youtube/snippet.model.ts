import { Thumbnails } from './thumbnails.model';

export interface Snippet {
  publishedAt: string | Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  },
  defaultAudioLanguage: string;
}
