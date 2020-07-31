import { Component, OnInit } from '@angular/core';

import { SearchResultItem } from '../../models/search-result-item.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss'],
})
export class SearchResultListComponent implements OnInit {
  public searchItems: SearchResultItem[];

  constructor(private searchService: SearchService) {}

  public ngOnInit(): void {
    this.getItems();
  }

  public getItems(): void {
    this.searchService
      .getItems()
      .subscribe((items: SearchResultItem[]) => (this.searchItems = items));
  }
}
