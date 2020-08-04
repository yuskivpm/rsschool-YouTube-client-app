import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchResultListComponent } from './components/search-result-list/search-result-list.component';
import { SearchResultItemComponent } from './components/search-result-item/search-result-item.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { MainPageComponent } from './components/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultListComponent,
    SearchResultItemComponent,
    UserLoginComponent,
    StatisticComponent,
    MainPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
