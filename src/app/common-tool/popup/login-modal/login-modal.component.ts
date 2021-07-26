import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  @Input() modalRef!: BsModalRef;
  login!: {
    mail: string;
    password: string;
  }
  constructor() {
  }

  ngOnInit(): void {
    this.login = {
      mail: '',
      password: ''
    }
  }
}
