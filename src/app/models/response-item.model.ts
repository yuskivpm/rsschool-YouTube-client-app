interface IThumbnail {
  url: string;
  width: number;
  height: number;
}

interface IThumbnails {
  default: IThumbnail;
  medium: IThumbnail;
  high: IThumbnail;
  standard: IThumbnail;
  maxres: IThumbnail;
}

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}

interface IStatistics {
  viewCount: string | number;
  likeCount: string | number;
  dislikeCount: string | number;
  favoriteCount: string | number;
  commentCount: string | number;
}

export interface IResponseItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
  statistics: IStatistics;
}
