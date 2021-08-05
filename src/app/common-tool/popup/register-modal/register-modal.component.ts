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
  registerIdentity!: boolean;
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
    this.registerLineFirstStepModalRef = this.modalService.show(template, {
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
    this.registerThirdStepModalRef.hide();
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
}
