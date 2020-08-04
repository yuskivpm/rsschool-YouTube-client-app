import { Injectable } from '@angular/core';
import { IResponseItem } from '../models/youtube/response-item.model';
import { SortEvent } from '../components/sort-button/sort-event.model';

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
    switch (sortName) {
      case 'date':
        return item?.snippet?.publishedAt;
      case 'count of views':
        return +item?.statistics?.viewCount;
      default:
        return null;
    }
  }
}
