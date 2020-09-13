import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {
  MIN_TITLE_LENGTH,
  MIN_DESCRIPTION_LENGTH,
  MIN_URL_LENGTH,
  URL_PATTERN,
} from 'src/app/constants/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public adminForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.adminForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(MIN_TITLE_LENGTH),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(MIN_DESCRIPTION_LENGTH),
      ]),
      image: new FormControl(null, [
        Validators.required,
        Validators.minLength(MIN_URL_LENGTH),
        Validators.pattern(URL_PATTERN),
      ]),
      video: new FormControl(null, [
        Validators.required,
        Validators.minLength(MIN_URL_LENGTH),
        Validators.pattern(URL_PATTERN),
      ]),
    });
  }

  public submit(): void {
    // const name: string = this.getValueFromControl('login');
    // const password: string = this.getValueFromControl('password');
    // if (this.loginForm.valid) {
    //   this.handleLogin(new User(name, password));
    // }
  }

}
