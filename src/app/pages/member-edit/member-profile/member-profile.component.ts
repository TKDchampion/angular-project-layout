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
  verifyUserModalRef!: BsModalRef;
  salesCodeModalRef!: BsModalRef;
  changePassword = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };
  registerAccount: RegisterAccountModal = {
    account: 'test@gmail.com',
    password: '',
    confirmPassword: '',
  };
  verifyEmailStatus!: boolean;
  memberModalRef!: BsModalRef;
  identity = 1;
  isMailValidated = false;
  isStartVerify = false;
  hasInviteCode = false;

  constructor(private envService: EveService, private modalService: BsModalService, private modalServices: ModalService) {
    this.identity = this.envService.getEnv('identity') as number;
    this.isMailValidated = this.envService.getEnv('isMailValidated') as boolean;
  }

  openVerify(template: TemplateRef<unknown>): void {
    this.verifyUserModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }
  openSalesInviteModal(template: TemplateRef<unknown>): void {
    this.salesCodeModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }

  startVerify(status: boolean): void {
    this.isStartVerify = status;
  }

  getInviteCode(status: boolean): void {
    this.hasInviteCode = status;
    this.isStartVerify = status;
  }

  openBindPopup(template: TemplateRef<unknown>): void {
    this.memberModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
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

  bindLine(template: TemplateRef<unknown>): void {
    this.bindLineModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }

  confirmChange(): void {
    // TODO 導至登出
    this.changePasswordModalRef.hide();
  }

  setVerifiedMail($event: boolean): void {
    this.verifyEmailStatus = $event;
  }

  backStep(): void {
    this.memberModalRef.hide();
  }

  registerMail(): void {
    this.memberModalRef.hide();
    this.modalServices.open('custom-modal-1');
  }
}
