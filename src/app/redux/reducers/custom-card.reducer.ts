import { createReducer, on, Action, ActionReducer } from '@ngrx/store';

import { saveCustomCard } from '../actions/custom-card.actions';
import { CustomCardModel } from 'src/app/shared/models/custom-card.model';

const INITIAL_STATE: CustomCardModel[] = [];

const internalReducer: ActionReducer<CustomCardModel[], Action> = createReducer(
  INITIAL_STATE,
  on(saveCustomCard, (state: CustomCardModel[], { customCard }) => ([...state, customCard]))
);

export function customCardReducer(state: CustomCardModel[], action: Action): CustomCardModel[] {
  return internalReducer(state, action);
}
