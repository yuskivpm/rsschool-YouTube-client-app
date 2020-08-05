import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchResultListComponent } from './components/search-result-list/search-result-list.component';
import { SearchResultItemComponent } from './components/search-result-list/search-result-item/search-result-item.component';
import { UserLoginComponent } from './components/header/user-login/user-login.component';
import { StatisticComponent } from './components/search-result-list/search-result-item/statistic/statistic.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { DateStatusDirective } from './directives/date-status.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterByKeyWordPipe } from './pipes/filter-by-key-word.pipe';
import { SortButtonComponent } from './components/header/sort-button/sort-button.component';
import { ReSortPipe } from './pipes/re-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultListComponent,
    SearchResultItemComponent,
    UserLoginComponent,
    StatisticComponent,
    MainPageComponent,
    DateStatusDirective,
    FilterByKeyWordPipe,
    SortButtonComponent,
    ReSortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
