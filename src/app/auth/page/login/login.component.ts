import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {
  MIN_PASSWORD_LENGTH,
  MIN_LOGIN_LENGTH,
  LIST_PAGE,
} from 'src/app/constants/common';
import { AuthUserService } from 'src/app/core/services/auth-user.service';
import { UserHolderService } from 'src/app/core/services/user-holder.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loading: boolean;

  constructor(
    private router: Router,
    private authUserService: AuthUserService,
    private userHolderService: UserHolderService
  ) {}

  private handleLogin(user: User): void {
    if (user.name && (user.password || user.token)) {
      this.loading = true;
      this.loginForm.controls.password.setValue('');
      this.authUserService.login(user).subscribe(
        (success) => {
          if (success) {
            this.router.navigate([`/${LIST_PAGE}`]);
          }
        },
        null,
        () => (this.loading = false)
      );
    }
  }

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl(null, [
        Validators.required,
        Validators.minLength(MIN_LOGIN_LENGTH),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(MIN_PASSWORD_LENGTH),
      ]),
    });
    const lastUser: User = this.userHolderService.loadLastUser();
    if (lastUser) {
      this.handleLogin(lastUser);
    }
  }

  public submit(): void {
    const name: string = this.loginForm.controls.login.value.trim();
    this.loginForm.controls.login.setValue(name);
    const password: string = this.loginForm.controls.password.value.trim();
    this.loginForm.controls.password.setValue(password);
    if (this.loginForm.valid) {
      this.handleLogin(new User(name, password));
    }
  }
}
