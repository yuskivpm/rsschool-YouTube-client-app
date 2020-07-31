import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent implements OnInit {
  public buttons: string[] = ['date', 'count of views', 'by word or sentence'];

  constructor() {}

  public ngOnInit(): void {}
}
