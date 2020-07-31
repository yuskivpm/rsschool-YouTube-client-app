import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  @Input() public userName: string;

  constructor() {}

  public ngOnInit(): void {}
}
