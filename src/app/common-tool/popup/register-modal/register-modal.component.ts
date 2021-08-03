import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegisterJobModal } from './register.modal';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {
  @Input() modalRef!: BsModalRef;
  verifyEmailModalRef!: BsModalRef;
  registerFirstStepModalRef!: BsModalRef;
  registerSecendStepModalRef!: BsModalRef;
  registerThirdStepModalRef!: BsModalRef;
  registerLearnCheckModalRef!: BsModalRef;
  registerIdentity!: boolean;
  registerJob: RegisterJobModal = {
    job: '',
    jobCompany: '',
    jobCity: '',
    jobType: ''
  };
  verifyEmailStatus!: boolean;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  setRegisterJob(registerJob: any, column: string, name: string) {
    registerJob[column] = name;
    this.registerJob = registerJob;
  };

  registerFirstStep(template: TemplateRef<any>) {
    this.modalRef.hide();
    this.registerFirstStepModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width'
    });
  }

  registerSecondStep(template: TemplateRef<any>) {
    this.registerFirstStepModalRef.hide();
    this.registerSecendStepModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width'
    });
  }

  registerThirdStep(template: TemplateRef<any>) {
    this.registerSecendStepModalRef.hide();
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

  backFirstStep(template: TemplateRef<any>) {
    this.registerSecendStepModalRef.hide();
    this.registerFirstStepModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width'
    });
  }

  backSecondStep(template: TemplateRef<any>) {
    this.registerThirdStepModalRef.hide();
    this.registerSecendStepModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width'
    });
  }

  verifyEmail(template: TemplateRef<any>) {
    this.verifyEmailModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal-sm verify_email',
    });
  }

  getVerifyStatus($event: boolean) {
    this.verifyEmailStatus = $event;
  }
}
