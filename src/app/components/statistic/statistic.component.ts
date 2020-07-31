import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent implements OnInit {
  @Input() public imageUrl: string;
  @Input() public description: string;
  @Input() public count: string | number;

  constructor() {}

  public ngOnInit(): void {}
}
