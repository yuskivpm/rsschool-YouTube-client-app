export const SORT_BUTTONS: string[] = ['date', 'count of views'];

// this rule conflict with typedef rule (https://github.com/palantir/tslint/issues/711)
// tslint:disable-next-line: no-inferrable-types
export const USER_NAME: string = 'Your name';

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

// this rule conflict with typedef rule (https://github.com/palantir/tslint/issues/711)
// tslint:disable-next-line: no-inferrable-types
export const THEME_COLOR: string = '#2f80ec';

export const SORT_ORDER: string[] = ['arrow_downward', 'arrow_upward'];
