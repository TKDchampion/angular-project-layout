import { Component, Input, OnInit, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DemoLearnType, LearnType, RegisterAccountModal, RegisterJobModal, RegisterUserInfoModal } from './register.modal';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {
  @Input() modalRef!: BsModalRef;
  verifyEmailModalRef!: BsModalRef;
  registerFirstStepModalRef!: BsModalRef;
  registerSecondStepModalRef!: BsModalRef;
  registerThirdStepModalRef!: BsModalRef;
  registerLearnCheckModalRef!: BsModalRef;
  registerSuccessModalRef!: BsModalRef;
  privacyModalRef!: BsModalRef;
  registerLineFirstStepModalRef!: BsModalRef;
  registerLineSecondStepModalRef!: BsModalRef;
  registerIdentity!: boolean;
  registerLearnCount = 0;
  registerUserInfo: RegisterUserInfoModal = {
    nickname: '',
    firstname: '',
    lastname: '',
    phone: ''
  };
  registerJob: RegisterJobModal = {
    job: '',
    jobCompany: '',
    jobCity: '',
    jobType: ''
  };
  registerAccount: RegisterAccountModal = {
    account: '',
    password: '',
    confirmPassword: ''
  }
  verifyEmailStatus!: boolean;
  isLineRegister = false;
  demoLearnType = DemoLearnType;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  setRegisterJob(registerJob: any, column: string, name: string) {
    registerJob[column] = name;
    this.registerJob = registerJob;
  };

  registerLineFirstStep(template: TemplateRef<any>) {
    this.modalRef.hide();
    this.isLineRegister = true;
    this.registerLineFirstStepModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width'
    });
  }

  registerLineSecondStep(template: TemplateRef<any>) {
    this.registerLineFirstStepModalRef.hide();
    this.registerLineSecondStepModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width'
    });
  }

  registerFirstStep(template: TemplateRef<any>) {
    this.modalRef.hide();
    this.registerFirstStepModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width'
    });
  }

  registerSecondStep(template: TemplateRef<any>) {
    this.registerFirstStepModalRef.hide();
    this.registerSecondStepModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width'
    });
  }

  registerThirdStep(template: TemplateRef<any>) {
    this.registerSecondStepModalRef.hide();
    this.registerThirdStepModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width'
    });
  }

  registerLearnCheck(template: TemplateRef<any>) {
    this.demoLearnType.forEach((i: LearnType) => i.isChecked = false);
    this.isLineRegister ? this.registerLineSecondStepModalRef.hide() : this.registerThirdStepModalRef.hide();
    this.registerLearnCheckModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width'
    });
  }

  registerToSuccess(template: TemplateRef<any>) {
    this.registerLearnCheckModalRef.hide();
    this.registerSuccessModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width'
    });
  }

  backFirstStep(template: TemplateRef<any>) {
    this.registerSecondStepModalRef.hide();
    this.registerFirstStepModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width'
    });
  }

  backSecondStep(template: TemplateRef<any>) {
    this.registerThirdStepModalRef.hide();
    this.registerSecondStepModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width'
    });
  }

  backLineFirstStep(template: TemplateRef<any>) {
    this.registerLineSecondStepModalRef.hide();
    this.registerLineFirstStepModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width'
    });
  }

  verifyEmail(template: TemplateRef<any>) {
    this.verifyEmailModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal-sm verify_email',
    });
  }

  openPrivacyModal(template: TemplateRef<any>) {
    this.registerThirdStepModalRef.hide();
    this.privacyModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
    });
  }

  closePrivacyModal(template: TemplateRef<any>) {
    this.registerThirdStepModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width'
    });
  }

  getVerifyStatus($event: boolean) {
    this.verifyEmailStatus = $event;
  }

  changeLearnType(type: LearnType) {
    type.isChecked = !type.isChecked;
    this.registerLearnCount = 0;
    this.demoLearnType.forEach((i: LearnType) => {
      if (i.isChecked) {
        this.registerLearnCount++;
      }
    });
  }
}
