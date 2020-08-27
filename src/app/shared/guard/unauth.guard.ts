import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Route,
  UrlSegment,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthUserService } from 'src/app/core/services/auth-user.service';
import { LOGIN_PAGE } from 'src/app/constants/common';

@Injectable({
  providedIn: 'root',
})
export class UnauthGuard implements CanActivate, CanLoad {
  constructor(private authUserService: AuthUserService, private router: Router) {}

  private alreadyLogin(): boolean {
    const isAuthorized: boolean = this.authUserService.isAuthorized;
    if (!isAuthorized) {
      this.router.navigate([`/${LOGIN_PAGE}`]);
    }
    return isAuthorized;
  }

  public canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.alreadyLogin();
  }

  public canLoad():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.alreadyLogin();
  }
}
