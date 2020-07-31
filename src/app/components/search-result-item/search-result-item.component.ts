import { Component, OnInit, Input } from '@angular/core';

import { SearchResultItem } from '../../models/search-result-item.model';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export class SearchResultItemComponent implements OnInit {
  @Input() public item: SearchResultItem;

  constructor() {}

  public ngOnInit(): void {}
}
