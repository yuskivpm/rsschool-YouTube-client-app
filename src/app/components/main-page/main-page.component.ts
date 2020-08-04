import { Component, OnInit, EventEmitter } from '@angular/core';

import { ResponseItem } from 'src/app/models/youtube/response-item.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public searchItems: ResponseItem[];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void { }

  fetchData(searchText: string): void {
    this.searchService.getItems(searchText).subscribe(items => this.searchItems = items);
  }
}
