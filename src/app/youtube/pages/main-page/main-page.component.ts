import { Component, OnInit } from '@angular/core';
import { BehaviorSubject  } from 'rxjs';

import { IResponseItem } from 'src/app/youtube/models/response-item.model';
import { SearchService } from 'src/app/core/services/search.service';
import { THEME_COLOR } from 'src/app/constants/common';
import { SortEvent } from 'src/app/youtube/models/sort-event.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  private filterWordsAsSubject: BehaviorSubject<string>;
  private sortOrderAsSubject: BehaviorSubject<SortEvent>;
  private loadingAsSubject: BehaviorSubject<boolean>;
  public searchItems: BehaviorSubject<IResponseItem[]>;
  public filterWords: string = '';
  public sortOrder: SortEvent;
  public themeColor: string = THEME_COLOR;
  public isLoading: boolean;

  constructor(private searchService: SearchService) { }

  public ngOnInit(): void {
    this.searchItems = this.searchService.responseItems;
    this.filterWordsAsSubject = this.searchService.filterWordsAsSubject;
    this.filterWordsAsSubject.subscribe(filter => this.filterWords = filter);
    this.sortOrderAsSubject = this.searchService.sortOrderAsSubject;
    this.sortOrderAsSubject.subscribe(sort => this.sortOrder = sort);
    this.loadingAsSubject = this.searchService.isLoading;
    this.loadingAsSubject.subscribe(loading => this.isLoading = loading);
  }
}
