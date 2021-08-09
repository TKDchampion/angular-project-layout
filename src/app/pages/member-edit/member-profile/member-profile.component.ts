import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ForgetPasswordModalComponent } from 'src/app/common-tool/popup/forget-password-modal/forget-password-modal.component';
import { EveService } from 'src/app/services/env.service';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.scss'],
})
export class MemberProfileComponent {
  changePasswordModalRef!: BsModalRef;
  forgetPasswordModalRef!: BsModalRef;
  changePassword = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };
  memberModalRef!: BsModalRef;
  identity = 1;
  isMailValidated = false;

  constructor(private envService: EveService, private modalService: BsModalService) {
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

  confirmChange(): void {
    this.changePasswordModalRef.hide();
  }
}
