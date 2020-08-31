import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { YoutubeRoutingModule } from './youtube.routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailedInfoComponent } from './pages/detailed-info/detailed-info.component';
import { BoardComponent } from './components/board/board.component';
import { SearchResultItemComponent } from './components/search-result-item/search-result-item.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { StatisticsBlockComponent } from './components/statistics-block/statistics-block.component';
import { DateStatusDirective } from './directives/date-status.directive';
import { FilterByKeyWordPipe } from './pipes/filter-by-key-word.pipe';
import { ReSortPipe } from './pipes/re-sort.pipe';
import { CounterPipe } from './pipes/counter.pipe';

@NgModule({
  declarations: [
    MainPageComponent,
    BoardComponent,
    SearchResultItemComponent,
    StatisticComponent,
    DateStatusDirective,
    FilterByKeyWordPipe,
    ReSortPipe,
    DetailedInfoComponent,
    StatisticsBlockComponent,
    CounterPipe,
  ],
  exports: [MainPageComponent, DetailedInfoComponent],
  imports: [SharedModule, YoutubeRoutingModule],
})
export class YoutubeModule {}
