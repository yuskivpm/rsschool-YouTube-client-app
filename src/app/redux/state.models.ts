import { CustomCardModel } from '../shared/models/custom-card.model';
import { IResponseItem } from '../shared/models/response-item.model';

export interface StoreModel {
  customCards: CustomCardModel[],
  youtube: IResponseItem[],
}
