import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ForgetPasswordModalComponent } from 'src/app/common-tool/popup/forget-password-modal/forget-password-modal.component';
import { RegisterAccountModal, RegisterJobModal, RegisterUserInfoModal } from 'src/app/common-tool/popup/register-modal/register.modal';
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
  editMemberModalRef!: BsModalRef;
  editNotVerifyProfileModalRef!: BsModalRef;
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
  registerUserInfo: RegisterUserInfoModal = {
    nickname: 'Wendy Lian',
    firstname: '梁',
    lastname: '文欣',
    phone: '0912345678'
  };
  registerJob: RegisterJobModal = {
    job: '骨科醫生',
    jobCompany: '大安區聯合醫院',
    jobCity: '台北市',
    jobType: '骨科',
    doctorId: 'Q123456'
  };
  verifyEmailStatus!: boolean;
  memberModalRef!: BsModalRef;
  identity = 1;
  isMailValidated = false;
  isStartVerify = false;
  hasInviteCode = false;
  isJobEmpty = false;
  isJobCityEmpty = false;
  isJobTypeEmpty = false;

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

  editMemberSubmit() {
    this.editMemberModalRef.hide();
    this.openModal('edit_profile_toast');
  }



  editNotVerifyMember(template: TemplateRef<unknown>): void {
    this.editNotVerifyProfileModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }

  editMember(template: TemplateRef<unknown>): void {
    this.editMemberModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }

  setRegisterJob(registerJob: any, column: string, name: string) {
    registerJob[column] = name;
    this.registerJob = registerJob;
  };

  validateJobDropdown() {
    this.isJobEmpty = !this.registerJob.job;
  }
  validateJobCityDropdown() {
    this.isJobCityEmpty = !this.registerJob.jobCity;
  }
  validateJobTypeDropdown() {
    this.isJobTypeEmpty = !this.registerJob.jobType;
  }

  openModal(id: string): void {
    this.modalServices.open(id);
  }
}
