import { Component, OnInit, OnDestroy } from '@angular/core';

import { SORT_BUTTONS, MIN_SEARCH_LENGTH } from 'src/app/constants/common';
import { SortEvent } from 'src/app/shared/models/sort-event.model';
import { SearchService } from 'src/app/core/services/search.service';
import { AuthUserService } from 'src/app/core/services/auth-user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private curSortOrder: SortEvent = {} as SortEvent;
  public buttons: string[] = SORT_BUTTONS;
  public showSettings: boolean = false;
  public isAuthorized: boolean = false;

  constructor(
    private searchService: SearchService,
    private authUserService: AuthUserService
  ) {}

  public ngOnInit(): void {
    this.subscription = this.authUserService.authUser.subscribe((user) => {
      this.isAuthorized = !!user;
    });
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public search(searchText: string): void {
    if (searchText.length >= MIN_SEARCH_LENGTH) {
      this.searchService.getItems(searchText);
    }
  }

  public startFilter(filterValue: string): void {
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
