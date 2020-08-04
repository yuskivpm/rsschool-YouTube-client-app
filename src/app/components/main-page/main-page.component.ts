import { Component, OnInit, EventEmitter } from '@angular/core';

import { SearchResultItem } from 'src/app/models/search-result-item.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public searchItems: SearchResultItem[];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void { }

  fetchData(searchText: string): void {
    this.searchService.getItems(searchText).subscribe(items => this.searchItems = items);
  }
}
