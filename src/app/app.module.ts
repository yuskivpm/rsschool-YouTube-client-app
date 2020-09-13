import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { customCardReducer } from './redux/reducers/custom-card.reducer';
import { youtubeReducer } from './redux/reducers/youtube.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    StoreModule.forRoot({
      customCards: customCardReducer,
      youtube: youtubeReducer,
    }),
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
