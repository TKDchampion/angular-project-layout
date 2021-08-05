import { ForgetPasswordModalComponent } from './../forget-password-modal/forget-password-modal.component';
import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  @Input() modalRef!: BsModalRef;
  forgetPasswordModalRef!: BsModalRef;
  login!: {
    mail: string;
    password: string;
  }
  loginError = false;
  constructor(private modalService: BsModalService) {
  }

  ngOnInit(): void {
    this.login = {
      mail: '',
      password: ''
    }
  }

  forgetPassword() {
    this.modalRef.hide();
    this.forgetPasswordModalRef = this.modalService.show(ForgetPasswordModalComponent, {
      class: 'modal-dialog-centered modal_max_width'
    });
    this.forgetPasswordModalRef.content.modalRef = this.forgetPasswordModalRef;
  }
}
