import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { RegisterLineModalComponent } from './../register-line-modal/register-line-modal.component';
import { ForgetPasswordModalComponent } from './../forget-password-modal/forget-password-modal.component';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  @Input() modalRef!: BsModalRef;
  registerModalRef!: BsModalRef;
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
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false
    });
    this.forgetPasswordModalRef.content.modalRef = this.forgetPasswordModalRef;
  }

  register() {
    this.modalRef.hide();
    this.registerModalRef = this.modalService.show(RegisterModalComponent, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false
    });
    this.registerModalRef.content.modalRef = this.registerModalRef;
  }

  lineLogin() {
    this.modalRef.hide();
    this.registerModalRef = this.modalService.show(RegisterLineModalComponent, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false
    });
    this.registerModalRef.content.modalRef = this.registerModalRef;
  }
}
