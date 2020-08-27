import { Component, Input } from '@angular/core';

import { SORT_ORDER } from 'src/app/constants/common';

@Component({
  selector: 'app-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.scss']
})
export class SortButtonComponent {
  @Input() public caption: string;
  @Input() public sortOrder: number;

  get sortOrderText(): string {
    return SORT_ORDER[this.sortOrder];
  }
}
