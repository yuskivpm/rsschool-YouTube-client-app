import { createAction, props, ActionCreator } from '@ngrx/store';
import { CustomCardModel } from '../../shared/models/custom-card.model';
import { TypedAction } from '@ngrx/store/src/models';

type actionProps = { customCard: CustomCardModel };
type actionType = ActionCreator<'[CUSTOM CARD] SAVE', (props: actionProps) =>
  actionProps & TypedAction<'[CUSTOM CARD] SAVE'>>;

export const saveCustomCard: actionType =
  createAction('[CUSTOM CARD] SAVE', props<{ customCard: CustomCardModel }>());
