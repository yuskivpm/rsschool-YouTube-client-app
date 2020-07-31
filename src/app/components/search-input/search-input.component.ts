import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {}

  public search(searchText: string): void {
    console.log(`Start search for: ${searchText}`);
  }

  public settings(): void {
    console.log('Open settings');
  }
}
