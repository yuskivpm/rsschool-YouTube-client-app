import { Injectable } from '@angular/core';

import { IResponseItem } from '../models/youtube/response-item.model';
import { SortEvent } from '../components/sort-button/sort-event.model';
import { SORT_BUTTONS } from '../constants/common';

const KNOWN_SORT_TYPES_COUNT = 2;

@Injectable({
  providedIn: 'root'
})
export class SortFieldService {
  public compareItems(sortOrder: SortEvent, a: IResponseItem, b: IResponseItem): number {
    const aField = this.getFieldValueBySortOrder(sortOrder.sortName, a);
    const bField = this.getFieldValueBySortOrder(sortOrder.sortName, b);
    const compare = aField > bField ? 1 : -1;
    return sortOrder.sortOrder ? compare : -compare;
  }

  private getFieldValueBySortOrder(sortName: string, item: IResponseItem): string | number {
    if (KNOWN_SORT_TYPES_COUNT !== SORT_BUTTONS.length) {
      throw new TypeError('Update sort types list!')
    }
    switch (sortName) {
      case SORT_BUTTONS[0]:
        return item?.snippet?.publishedAt;
      case SORT_BUTTONS[1]:
        return +item?.statistics?.viewCount;
      default:
        return null;
    }
  }
}
