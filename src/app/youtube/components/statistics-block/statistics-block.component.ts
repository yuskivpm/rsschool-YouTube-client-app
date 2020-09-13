import { Component, Input } from '@angular/core';

import { IStatistics } from 'src/app/shared/models/response-item.model';

@Component({
  selector: 'app-statistics-block',
  templateUrl: './statistics-block.component.html',
  styleUrls: ['./statistics-block.component.scss']
})
export class StatisticsBlockComponent {
  @Input() public statistics: IStatistics;
}
