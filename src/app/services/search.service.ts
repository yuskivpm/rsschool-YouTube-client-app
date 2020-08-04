import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import { IYouTubeResponse } from '../models/youtube-response.model';
import { IResponseItem } from '../models/youtube/response-item.model';

const MOCK_DELAY = 2000;

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) { }

  public getItems(searchText: string): Observable<IResponseItem[]> {
    return this.http.get('assets/response.json').pipe(
      delay(MOCK_DELAY),
      map((response: IYouTubeResponse) => response.items)
    );
  }
}
