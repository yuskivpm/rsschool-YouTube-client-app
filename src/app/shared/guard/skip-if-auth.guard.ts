import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AuthUserService } from 'src/app/core/services/auth-user.service';
import { LIST_PAGE, LOGIN_PAGE } from 'src/app/constants/common';

@Injectable({
  providedIn: 'root',
})
export class SkipIfAuthGuard implements CanActivate {
  constructor(
    private authUserService: AuthUserService,
    private router: Router
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authUserService.isAuthorized.pipe(
      tap((isAuthorized) => {
        if (isAuthorized && state.url.startsWith(`/${LOGIN_PAGE}`)) {
          this.router.navigate([`/${LIST_PAGE}`]);
        }
      }),
      map((isAuthorized) => !isAuthorized)
    );
  }
}
