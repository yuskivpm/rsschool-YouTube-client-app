import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import {
  MIN_PASSWORD_LENGTH,
  MIN_LOGIN_LENGTH,
  LIST_PAGE,
} from 'src/app/constants/common';
import { AuthUserService } from 'src/app/core/services/auth-user.service';
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
    private authUserService: AuthUserService
  ) {}

  private handleLogin(user: User): void {
    if (user.name && (user.password || user.token)) {
      this.loading = true;
      this.loginForm.controls.password.setValue('');
      this.authUserService
        .login(user)
        .pipe(finalize(() => (this.loading = false)))
        .subscribe((success) => {
          if (success) {
            this.router.navigate([`/${LIST_PAGE}`]);
          }
        });
    }
  }

  private getValueFromControl(constrolName: string): string {
    const value: string = this.loginForm.controls[constrolName].value.trim();
    this.loginForm.controls[constrolName].setValue(value);
    return value;
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
  }

  public submit(): void {
    const name: string = this.getValueFromControl('login');
    const password: string = this.getValueFromControl('password');
    if (this.loginForm.valid) {
      this.handleLogin(new User(name, password));
    }
  }
}
