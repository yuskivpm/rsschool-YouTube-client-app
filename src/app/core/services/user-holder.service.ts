// this rule conflict with typedef rule (https://github.com/palantir/tslint/issues/711)
/* tslint:disable: no-inferrable-types */
import { Injectable } from '@angular/core';
import { Observable, timer, throwError } from 'rxjs';
import { mapTo } from 'rxjs/operators';

import { User } from '../../shared/models/user.model';
import { USER_HOLDER } from 'src/app/constants/common';

const FAKE_TOKEN: string = 'token';
const FAKE_EXCEPTION: string = 'user does not exist';
const FAKE_FETCH_TIME: number = 1000;

@Injectable({
  providedIn: 'root',
})
export class UserHolderService {
  public verifyUser(user: User): Observable<string> {
    return (user?.name && (user?.password || user?.token))
      ? timer(FAKE_FETCH_TIME).pipe(mapTo(FAKE_TOKEN))
      : throwError(FAKE_EXCEPTION);
  }

  public saveLastUser(user: User): void {
    localStorage.setItem(USER_HOLDER, JSON.stringify(user));
  }

  public loadLastUser(): User {
    const savedUser: string = localStorage.getItem(USER_HOLDER);
    if (savedUser) {
      try {
        return JSON.parse(savedUser);
      } catch { }
    }
    return null;
  }

  public clearLastUser(): void {
    localStorage.removeItem(USER_HOLDER);
  }
}
