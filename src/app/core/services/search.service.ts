import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { map, delay, take } from 'rxjs/operators';

import { IYouTubeResponse } from 'src/app/youtube/models/youtube-response.model';
import { IResponseItem } from 'src/app/youtube/models/response-item.model';
import { SortEvent } from 'src/app/youtube/models/sort-event.model';

// this rule conflict with typedef rule (https://github.com/palantir/tslint/issues/711)
// tslint:disable-next-line: no-inferrable-types
const MOCK_DELAY: number = 2000;

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private items: BehaviorSubject<IResponseItem[]> = new BehaviorSubject<IResponseItem[]>(null);
  private aFilterWords: BehaviorSubject<string> = new BehaviorSubject('');
  private aSortOrder: BehaviorSubject<SortEvent> = new BehaviorSubject(null);
  private loading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  get isLoading(): BehaviorSubject<boolean> {
    return this.loading;
  }

  get responseItems(): BehaviorSubject<IResponseItem[]> {
    return this.items;
  }

  get sortOrderAsSubject(): BehaviorSubject<SortEvent> {
    return this.aSortOrder;
  }

  set sortOrder(newSortOrder: SortEvent) {
    this.aSortOrder.next(newSortOrder);
  }

  get filterWordsAsSubject(): BehaviorSubject<string> {
    return this.aFilterWords;
  }

  set filterWords(newFilterWords: string) {
    this.aFilterWords.next(newFilterWords);
  }

  public getItems(searchText: string): void {
    this.items.next(null);
    this.isLoading.next(true);
    this.http.get('assets/response.json').pipe(
      delay(MOCK_DELAY),
      map((response: IYouTubeResponse) => response.items),
      take(1)
    ).subscribe(
      items => this.items.next(items),
      null,
      () => this.isLoading.next(false)
    );
  }

  public getItemById(itemId: string): Observable<IResponseItem> {
    return of(this.items?.value?.find(({ id }) => id === itemId));
  }
}
