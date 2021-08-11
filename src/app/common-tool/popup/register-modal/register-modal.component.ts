/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, Input, OnInit, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DemoLearnType, LearnType, RegisterAccountModal, RegisterJobModal, RegisterUserInfoModal } from './register.modal';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss'],
})
export class RegisterModalComponent {
  @Input() modalRef!: BsModalRef;
  verifyEmailModalRef!: BsModalRef;
  registerFirstStepModalRef!: BsModalRef;
  registerSecondStepModalRef!: BsModalRef;
  registerThirdStepModalRef!: BsModalRef;
  registerLearnCheckModalRef!: BsModalRef;
  registerSuccessModalRef!: BsModalRef;
  privacyModalRef!: BsModalRef;
  registerLineFirstStepModalRef!: BsModalRef;
  registerIdentity!: boolean;
  registerUserInfo: RegisterUserInfoModal = {
    nickname: '',
    firstname: '',
    lastname: '',
    phone: '',
  };
  registerJob: RegisterJobModal = {
    job: '',
    jobCompany: '',
    jobCity: '',
    jobType: '',
  };
  registerAccount: RegisterAccountModal = {
    account: '',
    password: '',
    confirmPassword: '',
  };
  verifyEmailStatus!: boolean;
  demoLearnType = DemoLearnType;
  isJobEmpty = false;
  isJobCityEmpty = false;
  isJobTypeEmpty = false;

  constructor(private modalService: BsModalService) {}

  setRegisterJob(registerJob: any, column: string, name: string): void {
    registerJob[column] = name;
    this.registerJob = registerJob;
  }

  registerLineFirstStep(template: TemplateRef<unknown>): void {
    this.modalRef.hide();
    this.registerLineFirstStepModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }

  registerFirstStep(template: TemplateRef<unknown>): void {
    this.modalRef.hide();
    this.registerFirstStepModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }

  registerSecondStep(template: TemplateRef<unknown>): void {
    this.registerFirstStepModalRef.hide();
    this.registerSecondStepModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }

  registerThirdStep(template: TemplateRef<unknown>): void {
    this.registerSecondStepModalRef.hide();
    this.registerThirdStepModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }

  registerLearnCheck(template: TemplateRef<unknown>): void {
    this.registerThirdStepModalRef.hide();
    this.registerLearnCheckModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }

  registerToSuccess(template: TemplateRef<any>): void {
    this.registerLearnCheckModalRef.hide();
    this.registerSuccessModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }

  backFirstStep(template: TemplateRef<unknown>): void {
    this.registerSecondStepModalRef.hide();
    this.registerFirstStepModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }

  backSecondStep(template: TemplateRef<unknown>): void {
    this.registerThirdStepModalRef.hide();
    this.registerSecondStepModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }

  setVerifiedMail($event: boolean): void {
    this.verifyEmailStatus = $event;
  }

  validateJobDropdown() {
    this.isJobEmpty = !this.registerJob.job;
  }
  validateJobCityDropdown() {
    this.isJobCityEmpty = !this.registerJob.jobCity;
  }
  validateJobTypeDropdown() {
    this.isJobTypeEmpty = !this.registerJob.jobType;
  }
}
