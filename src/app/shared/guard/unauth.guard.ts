import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthUserService } from 'src/app/core/services/auth-user.service';
import { LOGIN_PAGE } from 'src/app/constants/common';

@Injectable({
  providedIn: 'root',
})
export class UnauthGuard implements CanActivate {
  constructor(
    private authUserService: AuthUserService,
    private router: Router
  ) {}

  public canActivate(): Observable<boolean> {
    return this.authUserService.isAuthorized.pipe(
      tap((isAuthorized) => {
        if (!isAuthorized) {
          this.router.navigate([`/${LOGIN_PAGE}`]);
        }
      })
    );
  }
}
