import { Component, OnInit, EventEmitter } from '@angular/core';

import { IResponseItem } from 'src/app/models/youtube/response-item.model';
import { SearchService } from '../../services/search.service';
import { THEME_COLOR } from 'src/app/constants/common';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public searchItems: IResponseItem[];
  public loading: boolean = false;
  public filterWords: string = '';
  public themeColor: string = THEME_COLOR;

  constructor(private searchService: SearchService) { }

  public ngOnInit(): void { }

  public fetchData(searchText: string): void {
    this.loading = true;
    this.searchService
      .getItems(searchText)
      .subscribe((items: IResponseItem[]) => {
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
}
