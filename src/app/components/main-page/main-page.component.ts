import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IResponseItem } from 'src/app/models/response-item.model';
import { SearchService } from 'src/app/services/search.service';
import { THEME_COLOR } from 'src/app/constants/common';
import { SortEvent } from 'src/app/models/sort-event.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnDestroy {
  private subscription: Subscription;
  public searchItems: IResponseItem[];
  public loading: boolean = false;
  public filterWords: string = '';
  public sortOrder: SortEvent;
  public themeColor: string = THEME_COLOR;

  constructor(private searchService: SearchService) { }

  public fetchData(searchText: string): void {
    this.loading = true;
    this.searchItems = null;
    this.subscription = this.searchService
      .getItems(searchText)
      .subscribe(
        (items: IResponseItem[]) => {
          this.searchItems = items;
          this.loading = false;
        },
        () => {
          this.loading = false;
        });
  }

  public applyFilter(filterWords: string): void {
    this.filterWords = filterWords;
  }

  public applyReSort(sortOrder: SortEvent): void {
    this.sortOrder = sortOrder;
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
