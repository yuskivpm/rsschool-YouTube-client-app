import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SORT_BUTTONS, LIST_PAGE } from 'src/app/constants/common';
import { SortEvent } from 'src/app/youtube/models/sort-event.model';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private curSortOrder: SortEvent = {} as SortEvent;
  public buttons: string[] = SORT_BUTTONS;
  public showSettings: boolean = false;

  constructor(private router: Router, private searchService: SearchService) { }

  public search(searchText: string): void {
    this.searchService.getItems(searchText);
    this.router.navigate([`/${LIST_PAGE}`]);
  }

  public onFilterInput(filterValue: string): void {
    this.searchService.filterWords = filterValue;
  }

  public reSort(sortName: string): void {
    if (this.curSortOrder.sortName === sortName) {
      this.curSortOrder = {
        sortName,
        sortOrder: 1 - this.curSortOrder.sortOrder,
      };
    } else {
      this.curSortOrder = { sortName, sortOrder: 1 };
    }
    this.searchService.sortOrder = this.curSortOrder;
  }

  public sortOrderByName(buttonName: string): number {
    return this.curSortOrder.sortName === buttonName
      ? this.curSortOrder.sortOrder
      : undefined;
  }
}
