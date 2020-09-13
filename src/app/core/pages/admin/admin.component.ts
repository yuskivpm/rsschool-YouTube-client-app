import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import {
  MIN_TITLE_LENGTH,
  MIN_DESCRIPTION_LENGTH,
  MIN_URL_LENGTH,
  URL_PATTERN,
} from 'src/app/constants/common';
import { CustomCardModel } from 'src/app/shared/models/custom-card.model';
import { saveCustomCard } from 'src/app/redux/actions/custom-card.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public adminForm: FormGroup;

  constructor(private store: Store<{ customCard: CustomCardModel }>) { }

  private getValueFromControl(controlName: string): string {
    return this.adminForm.controls[controlName].value.trim();
  }

  public ngOnInit(): void {
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
    const customCard: CustomCardModel = {
      title: this.getValueFromControl('title'),
      description: this.getValueFromControl('description'),
      image: this.getValueFromControl('image'),
      video: this.getValueFromControl('video'),
      date: new Date().toUTCString(),
    };
    this.store.dispatch(saveCustomCard({ customCard }));
  }

}
