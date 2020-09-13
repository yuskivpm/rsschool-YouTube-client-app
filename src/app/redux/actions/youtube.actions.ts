import { createAction, props, ActionCreator } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

import { IResponseItem } from '../../shared/models/response-item.model';

type actionProps = { youtube: IResponseItem[] };
type actionType = ActionCreator<'[YOUTUBE RESPONSE] SAVE', (props: actionProps) =>
  actionProps & TypedAction<'[YOUTUBE RESPONSE] SAVE'>>;

export const saveYoutubeResponse: actionType = createAction('[YOUTUBE RESPONSE] SAVE', props<actionProps>());
