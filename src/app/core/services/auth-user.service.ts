import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { tap, map, take, finalize } from 'rxjs/operators';

import { User } from 'src/app/shared/models/user.model';
import { UserHolderService } from './user-holder.service';
import { LOGIN_PAGE } from 'src/app/constants/common';

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  private wait: boolean = false;
  private waiter: Subject<boolean> = new Subject<boolean>();
  private user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(
    private router: Router,
    private userHolderService: UserHolderService
  ) {
    const lastUser: User = this.userHolderService.loadLastUser();
    if (lastUser) {
      this.login(lastUser).subscribe();
    }
  }

  get authUser(): BehaviorSubject<User> {
    return this.user;
  }

  get isAuthorized(): Observable<boolean> {
    return !this.wait
      ? of(!!this.authUser.value)
      : this.waiter.pipe(map(() => !!this.authUser.value));
  }

  private clear(): void {
    this.userHolderService.clearLastUser();
    this.user.next(null);
  }

  public login(user: User): Observable<boolean> {
    this.wait = true;
    return this.userHolderService.verifyUser(user).pipe(
      take(1),
      tap((token) => {
        if (token) {
          user.password = '';
          if (!user.token) {
            user.token = token;
            this.userHolderService.saveLastUser(user);
          }
          this.user.next(user);
        } else {
          this.clear();
        }
      }),
      map((token) => !!token),
      finalize(() => {
        this.wait = false;
        this.waiter.next(true);
      })
    );
  }

  public logout(): Observable<boolean> {
    this.clear();
    this.router.navigate([`/${LOGIN_PAGE}`]);
    return of(true);
  }
}
