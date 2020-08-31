import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';

import { YoutubeAuthInterceptor } from './interceptors/youtube-auth.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: YoutubeAuthInterceptor,
      multi: true,
    },
  ],
})
export class SharedModule {}
