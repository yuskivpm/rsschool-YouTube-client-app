import { createReducer, on, Action, ActionReducer } from '@ngrx/store';

import { saveYoutubeResponse } from '../actions/youtube.actions';
import { IResponseItem } from 'src/app/shared/models/response-item.model';

const INITIAL_STATE: IResponseItem[] = [];

const internalReducer: ActionReducer<IResponseItem[], Action> = createReducer(
  INITIAL_STATE,
  on(saveYoutubeResponse, (state: IResponseItem[], { youtube }) => youtube)
);

export function youtubeReducer(state: IResponseItem[], action: Action): IResponseItem[] {
  return internalReducer(state, action);
}
