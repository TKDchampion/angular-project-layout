import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.scss']
})
export class SetNewPasswordComponent implements OnInit {
  resetPassword = '';
  resetConfirmPassword = '';
  setPasswordStatus = false;
  constructor() { }

  ngOnInit(): void {
  }

  goHome() {
  }
}
