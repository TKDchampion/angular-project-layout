import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegisterModalComponent } from '../register-modal/register-modal.component';

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
  loginError = false;
  registerModalRef!: BsModalRef;
  constructor(private modalService: BsModalService) {
  }

  ngOnInit(): void {
    this.login = {
      mail: '',
      password: ''
    }
  }

  register() {
    this.modalRef.hide();
    this.registerModalRef = this.modalService.show(RegisterModalComponent, {
      class: 'modal-dialog-centered modal_max_width'
    });
    this.registerModalRef.content.modalRef = this.registerModalRef;
  }
}
