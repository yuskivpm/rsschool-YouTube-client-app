import { Component } from '@angular/core';

import { SORT_BUTTONS, MIN_SEARCH_LENGTH } from 'src/app/constants/common';
import { SortEvent } from 'src/app/youtube/models/sort-event.model';
import { SearchService } from 'src/app/core/services/search.service';
import { AuthUserService } from 'src/app/core/services/auth-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private curSortOrder: SortEvent = {} as SortEvent;
  public buttons: string[] = SORT_BUTTONS;
  public showSettings: boolean = false;

  constructor(
    private searchService: SearchService,
    private authUserService: AuthUserService
  ) {}

  public search(searchText: string): void {
    if (searchText.length >= MIN_SEARCH_LENGTH) {
      this.searchService.getItems(searchText);
    }
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

  public get isAuthorized(): boolean {
    return this.authUserService.isAuthorized;
  }
}
