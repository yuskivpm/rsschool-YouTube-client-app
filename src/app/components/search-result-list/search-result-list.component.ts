import { Component, OnInit, Input } from '@angular/core';

import { SearchResultItem } from '../../models/search-result-item.model';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss'],
})
export class SearchResultListComponent implements OnInit {
  @Input('items') searchItems: SearchResultItem[];

  constructor() { }

  public ngOnInit(): void { }
}
