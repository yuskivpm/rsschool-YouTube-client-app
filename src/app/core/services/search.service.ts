import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { map, take, switchMap, debounceTime, finalize } from 'rxjs/operators';

import { IYouTubeResponse } from 'src/app/youtube/models/youtube-response.model';
import { IResponseItem, IID } from 'src/app/youtube/models/response-item.model';
import { SortEvent } from 'src/app/youtube/models/sort-event.model';
import { SEARCH_API, VIDEO_API, DEBOUNCE_TOME } from 'src/app/constants/common';

// this rule conflict with typedef rule (https://github.com/palantir/tslint/issues/711)
// tslint:disable-next-line: no-inferrable-types
const MOCK_DELAY: number = 2000;

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private items: BehaviorSubject<IResponseItem[]> = new BehaviorSubject<
    IResponseItem[]
  >(null);
  private aFilterWords: BehaviorSubject<string> = new BehaviorSubject('');
  private aSortOrder: BehaviorSubject<SortEvent> = new BehaviorSubject(null);
  private loading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

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
    this.http
      .get(SEARCH_API + encodeURIComponent(searchText))
      .pipe(
        debounceTime(DEBOUNCE_TOME),
        switchMap(
          ({ items }: IYouTubeResponse = { items: [] } as IYouTubeResponse) => {
            const videos: string = items
              .reduce(
                (list, { id }) => [
                  ...list,
                  id === 'string' ? id : (id as IID).videoId,
                ],
                []
              )
              .join(',');
            return this.http
              .get(VIDEO_API + videos)
              .pipe(map((response: IYouTubeResponse) => response.items));
          }
        ),
        take(1),
        finalize(() => this.isLoading.next(false))
      )
      .subscribe(
        (items) => this.items.next(items)
      );
  }

  public getItemById(itemId: string): Observable<IResponseItem> {
    return of(this.items?.value?.find(({ id }) => id === itemId));
  }
}
