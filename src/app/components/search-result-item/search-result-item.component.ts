import { Component, OnInit, Input } from '@angular/core';

import { IResponseItem } from 'src/app/models/youtube/response-item.model';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export class SearchResultItemComponent implements OnInit {
  @Input() public item: IResponseItem;

  constructor() { }

  public ngOnInit(): void { }
}
