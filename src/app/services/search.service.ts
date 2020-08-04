import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { YoutubeResponse } from '../models/youtube-response.model';
import { ResponseItem } from '../models/youtube/response-item.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) { }

  public getItems(searchText: string): Observable<ResponseItem[]> {
    return this.http.get('assets/response.json').pipe(
      map((response: YoutubeResponse) => response.items)
    );
  }
}
