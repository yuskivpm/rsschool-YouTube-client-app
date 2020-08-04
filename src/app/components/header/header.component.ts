import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { SORT_BUTTONS, USER_NAME } from 'src/app/constants/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() onSearch = new EventEmitter<string>();
  @Output() onFilter = new EventEmitter<string>();
  public userName: string = USER_NAME;
  public buttons: string[] = SORT_BUTTONS;
  public showSettings: boolean = false;

  constructor() { }

  public ngOnInit(): void { }

  public search(searchText: string): void {
    this.onSearch.emit(searchText);
  }

  public onFilterInput(filterValue: string): void {
    this.onFilter.emit(filterValue);
  }
}
