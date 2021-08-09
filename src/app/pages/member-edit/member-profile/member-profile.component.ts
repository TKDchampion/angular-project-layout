import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ForgetPasswordModalComponent } from 'src/app/common-tool/popup/forget-password-modal/forget-password-modal.component';
import { RegisterAccountModal } from 'src/app/common-tool/popup/register-modal/register.modal';
import { ModalService } from 'src/app/common-tool/toast/toast.services';
import { EveService } from 'src/app/services/env.service';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.scss'],
})
export class MemberProfileComponent {
  changePasswordModalRef!: BsModalRef;
  forgetPasswordModalRef!: BsModalRef;
  bindLineModalRef!: BsModalRef;
  changePassword = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };
  registerAccount: RegisterAccountModal = {
    account: '',
    password: '',
    confirmPassword: '',
  };
  verifyEmailStatus!: boolean;
  memberModalRef!: BsModalRef;
  identity = 1;
  isMailValidated = false;

  constructor(private envService: EveService, private modalService: BsModalService,private modalServices: ModalService) {
    this.identity = this.envService.getEnv('identity') as number;
    this.isMailValidated = this.envService.getEnv('isMailValidated') as boolean;
  }

  openBindPopup(template: TemplateRef<unknown>): void {
    this.memberModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
    });
  }

  openChangePasswordPopup(template: TemplateRef<unknown>): void {
    this.changePasswordModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }

  forgetPassword(): void {
    this.changePasswordModalRef.hide();
    this.forgetPasswordModalRef = this.modalService.show(ForgetPasswordModalComponent, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
    this.forgetPasswordModalRef.content.modalRef = this.forgetPasswordModalRef;
  }

  bindLine(template: TemplateRef<unknown>) {
    this.bindLineModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false
    })
  }

  confirmChange() {
    this.changePasswordModalRef.hide();
  }

  setVerifiedMail($event: boolean): void {
    this.verifyEmailStatus = $event;
  }

  backStep() {
    this.memberModalRef.hide();
  }

  registerMail() {
    this.memberModalRef.hide();
    this.modalServices.open('custom-modal-1');
  }
}
