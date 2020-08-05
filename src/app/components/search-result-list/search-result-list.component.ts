import { Component, Input } from '@angular/core';

import { IResponseItem } from 'src/app/models/response-item.model';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss'],
})
export class SearchResultListComponent {
  @Input('items') public searchItems: IResponseItem[];
}
