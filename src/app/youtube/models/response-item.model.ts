interface IThumbnail {
  url: string;
  width: number;
  height: number;
}

interface IThumbnails {
  default: IThumbnail;
  medium: IThumbnail;
  high: IThumbnail;
  standard?: IThumbnail;
  maxres?: IThumbnail;
}

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
  tags?: string[];
  categoryId?: string;
  defaultAudioLanguage?: string;
  localized?: {
    title: string;
    description: string;
  };
}

export interface IStatistics {
  viewCount: string | number;
  likeCount: string | number;
  dislikeCount: string | number;
  favoriteCount: string | number;
  commentCount: string | number;
}

export interface IID {
  kind: string;
  videoId: string;
}

export interface IResponseItem {
  kind: string;
  etag: string;
  id: string | IID;
  snippet?: ISnippet;
  statistics?: IStatistics;
}
