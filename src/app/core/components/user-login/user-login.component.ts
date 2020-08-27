import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthUserService } from '../../services/auth-user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit, OnDestroy {
  private authSubscription: Subscription;
  public userName: string;

  constructor(private authUserService: AuthUserService) {}

  public ngOnInit(): void {
    this.authSubscription = this.authUserService.authUser.subscribe((user) => {
      this.userName = user?.name;
    });
  }

  public ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  public logout(): void {
    this.authUserService.logout();
  }
}
