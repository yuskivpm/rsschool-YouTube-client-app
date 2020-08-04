import { Component, Output, EventEmitter } from '@angular/core';

import { SORT_BUTTONS, USER_NAME } from 'src/app/constants/common';
import { SortEvent } from '../sort-button/sort-event.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() onSearch = new EventEmitter<string>();
  @Output() onFilter = new EventEmitter<string>();
  @Output() onReSort = new EventEmitter<SortEvent>();
  public userName: string = USER_NAME;
  public buttons: string[] = SORT_BUTTONS;
  public showSettings: boolean = false;
  private curSortOrder: SortEvent = {} as SortEvent;

  public search(searchText: string): void {
    this.onSearch.emit(searchText);
  }

  public onFilterInput(filterValue: string): void {
    this.onFilter.emit(filterValue);
  }

  public reSort(sortName: string): void {
    if (this.curSortOrder.sortName === sortName) {
      this.curSortOrder = { sortName, sortOrder: 1 - this.curSortOrder.sortOrder };
    } else {
      this.curSortOrder = { sortName, sortOrder: 1 };
    }
    this.onReSort.emit(this.curSortOrder);
  }

  public sortOrderByName(buttonName: string): number {
    return this.curSortOrder.sortName === buttonName ? this.curSortOrder.sortOrder : undefined;
  }
}
