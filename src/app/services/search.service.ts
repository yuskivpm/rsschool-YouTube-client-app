import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SearchResultItem } from '../models/search-result-item.model';
import { ITEMS } from '../../assets/mock-response';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  public getItems(): Observable<SearchResultItem[]> {
    return of(ITEMS);
  }
}
