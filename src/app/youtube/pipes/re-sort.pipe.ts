import { Pipe, PipeTransform } from '@angular/core';

import { SortEvent } from 'src/app/shared/models/sort-event.model';
import { IResponseItem } from 'src/app/shared/models/response-item.model';
import { SortFieldService } from '../services/sort-field.service';

@Pipe({
  name: 'reSort'
})
export class ReSortPipe implements PipeTransform {
  constructor(private sortFieldService: SortFieldService) { }

  public transform(responseItems: IResponseItem[], sortEvent: SortEvent): IResponseItem[] {
    return sortEvent && responseItems
      ? [...responseItems].sort((a, b) => this.sortFieldService.compareItems(sortEvent, a, b))
      : responseItems;
  }
}
