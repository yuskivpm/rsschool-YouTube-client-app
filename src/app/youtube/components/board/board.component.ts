import { Component, Input } from '@angular/core';

import { IResponseItem } from 'src/app/shared/models/response-item.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  @Input('items') public searchItems: IResponseItem[];
}
