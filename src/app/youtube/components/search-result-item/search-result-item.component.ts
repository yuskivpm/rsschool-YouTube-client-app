import { Component, Input } from '@angular/core';

import { IResponseItem } from 'src/app/shared/models/response-item.model';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export class SearchResultItemComponent {
  @Input() public item: IResponseItem;
}
