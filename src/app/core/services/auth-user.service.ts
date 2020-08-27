import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { User } from 'src/app/shared/models/user.model';
import { UserHolderService } from './user-holder.service';
import { LOGIN_PAGE } from 'src/app/constants/common';

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  private user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private router: Router, private userHolderService: UserHolderService) {}

  get authUser(): BehaviorSubject<User> {
    return this.user;
  }

  get isAuthorized(): boolean {
    return !!this.authUser.value;
  }

  private clear(): void {
    this.userHolderService.clearLastUser();
    this.user.next(null);
  }

  public login(user: User): Observable<boolean> {
    return this.userHolderService.verifyUser(user).pipe(
      tap(token => {
        if (token) {
          user.token = token;
          user.password = '';
          this.userHolderService.saveLastUser(user);
          this.user.next(user);
        } else {
          this.clear();
        }
      }),
      map(token => !!token)
    );
  }

  public logout(): Observable<boolean> {
    this.clear();
    this.router.navigate([`/${LOGIN_PAGE}`]);
    return of(true);
  }
}
