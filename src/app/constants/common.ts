// this rule conflict with typedef rule (https://github.com/palantir/tslint/issues/711)
/* tslint:disable: no-inferrable-types */
export const SORT_BUTTONS: string[] = ['date', 'count of views'];

interface BorderColors {
  term: number;
  color: string;
}

export const BORDER_COLORS: BorderColors[] = [
  { term: 7, color: 'blue' },
  { term: 31, color: 'green' },
  { term: 183, color: 'yellow' },
  { term: Number.MAX_VALUE, color: 'red' },
];

export const THEME_COLOR: string = '#2f80ec';

export const SORT_ORDER: string[] = ['arrow_downward', 'arrow_upward'];

export const DAY_LENGTH: number = 1000 * 60 * 60 * 24;

export const MIN_LOGIN_LENGTH: number = 3;

export const MIN_PASSWORD_LENGTH: number = 7;

export const MIN_TITLE_LENGTH: number = 3;

export const MIN_DESCRIPTION_LENGTH: number = 5;

export const MIN_URL_LENGTH: number = 5;

export const URL_PATTERN: string = '^(https:\/\/).+';

// router URLs
export const LOGIN_PAGE: string = 'login';

export const LIST_PAGE: string = 'list';

export const ADMIN_PAGE: string = 'admin';

export const USER_HOLDER: string = 'auth-user';

// youtube search
export const API_BASE: string = 'https://www.googleapis.com/youtube/v3/';

export const SEARCH_API: string = `search?type=video&maxResults=15&q=`;

export const VIDEO_API: string = `videos?part=snippet,statistics&id=`;

export const DEBOUNCE_TOME: number = 500;

export const MIN_SEARCH_LENGTH: number = 3;
