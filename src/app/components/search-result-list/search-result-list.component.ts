import { Component, OnInit, Input } from '@angular/core';

import { ResponseItem } from 'src/app/models/youtube/response-item.model';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss'],
})
export class SearchResultListComponent implements OnInit {
  @Input('items') searchItems: ResponseItem[];

  constructor() { }

  public ngOnInit(): void { }
}
