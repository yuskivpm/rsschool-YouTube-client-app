import { Pipe, PipeTransform } from '@angular/core';

import { SortEvent } from '../components/sort-button/sort-event.model';
import { IResponseItem } from '../models/youtube/response-item.model';
import { SortFieldService } from '../services/sort-field.service';

@Pipe({
  name: 'reSort'
})
export class ReSortPipe implements PipeTransform {

  constructor(private sortFieldService: SortFieldService) { }

  transform(responseItems: IResponseItem[], sortEvent: SortEvent): IResponseItem[] {
    return sortEvent
      ? [...responseItems].sort((a, b) => this.sortFieldService.compareItems(sortEvent, a, b))
      : responseItems;
  }

}
