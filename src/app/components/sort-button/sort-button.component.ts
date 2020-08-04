import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { SORT_ORDER } from 'src/app/constants/common';
import { SortEvent } from './sort-event.model';

@Component({
  selector: 'app-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.scss']
})
export class SortButtonComponent implements OnInit {
  @Input() caption: string;
  @Output() onSort = new EventEmitter<SortEvent>();
  private currentSortOrder: number = 1;

  constructor() { }

  ngOnInit(): void { }

  get sortOrder(): string {
    return SORT_ORDER[this.currentSortOrder];
  }

  toggleSortOrder(): void {
    this.currentSortOrder = 1 - this.currentSortOrder;
    this.onSort.emit(new SortEvent(this.caption, this.currentSortOrder));
  }

}
