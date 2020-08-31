import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { API_BASE, VIDEO_API, SEARCH_API } from 'src/app/constants/common';

@Injectable()
export class YoutubeAuthInterceptor implements HttpInterceptor {
  constructor() {}

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (
      request.url.startsWith(VIDEO_API) ||
      request.url.startsWith(SEARCH_API)
    ) {
      const newRequest: HttpRequest<unknown> = request.clone({
        url: `${API_BASE}${request.url}&key=${environment.API_KEY}`,
      });
      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}
