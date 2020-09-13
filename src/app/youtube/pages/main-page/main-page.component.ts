import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

import { IResponseItem } from 'src/app/shared/models/response-item.model';
import { SearchService } from 'src/app/core/services/search.service';
import { THEME_COLOR } from 'src/app/constants/common';
import { SortEvent } from 'src/app/shared/models/sort-event.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public searchItems: BehaviorSubject<IResponseItem[]>;
  public filterWords: string = '';
  public sortOrder: SortEvent;
  public themeColor: string = THEME_COLOR;
  public isLoading: boolean;

  constructor(private searchService: SearchService) {}

  public ngOnInit(): void {
    this.searchItems = this.searchService.responseItems;
    this.subscription.add(
      this.searchService.filterWordsAsSubject.subscribe(
        (filter) => (this.filterWords = filter)
      )
    );
    this.subscription.add(
      this.searchService.sortOrderAsSubject.subscribe(
        (sort) => (this.sortOrder = sort)
      )
    );
    this.subscription.add(
      this.searchService.isLoading.subscribe(
        (loading) => (this.isLoading = loading)
      )
    );
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
