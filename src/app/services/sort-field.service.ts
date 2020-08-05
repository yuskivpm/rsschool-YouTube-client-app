import { Injectable } from '@angular/core';

import { IResponseItem } from '../models/response-item.model';
import { SortEvent } from 'src/app/models/sort-event.model';
import { SORT_BUTTONS } from '../constants/common';

// this rule conflict with typedef rule (https://github.com/palantir/tslint/issues/711)
// tslint:disable-next-line: no-inferrable-types
const KNOWN_SORT_TYPES_COUNT: number = 2;

@Injectable({
  providedIn: 'root'
})
export class SortFieldService {
  private getFieldValueBySortOrder(sortName: string, item: IResponseItem): string | number {
    if (KNOWN_SORT_TYPES_COUNT !== SORT_BUTTONS.length) {
      throw new TypeError('Update sort types list!');
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

  public compareItems(sortOrder: SortEvent, a: IResponseItem, b: IResponseItem): number {
    const aField: string | number = this.getFieldValueBySortOrder(sortOrder.sortName, a);
    const bField: string | number = this.getFieldValueBySortOrder(sortOrder.sortName, b);
    const compare: number = aField > bField ? 1 : -1;
    return sortOrder.sortOrder ? compare : -compare;
  }
}
