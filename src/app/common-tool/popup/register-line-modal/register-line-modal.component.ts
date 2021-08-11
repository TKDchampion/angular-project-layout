import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DemoLearnType, LearnType, RegisterJobModal, RegisterUserInfoModal } from '../register-modal/register.modal';

@Component({
  selector: 'app-register-line-modal',
  templateUrl: './register-line-modal.component.html',
  styleUrls: ['./register-line-modal.component.scss']
})
export class RegisterLineModalComponent implements OnInit {
  @Input() modalRef!: BsModalRef;
  @Input() title!: string;
  @Input() subTitle!: string;
  registerLineFirstStepModalRef!: BsModalRef;
  registerLineSecondStepModalRef!: BsModalRef;
  registerLearnCheckModalRef!: BsModalRef;
  registerSuccessModalRef!: BsModalRef;
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
  isJobEmpty = false;
  isJobCityEmpty = false;
  isJobTypeEmpty = false;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  setRegisterJob(registerJob: any, column: string, name: string) {
    registerJob[column] = name;
    this.registerJob = registerJob;
  };

  registerLineSecondStep(template: TemplateRef<any>) {
    this.modalRef.hide();
    this.registerLineSecondStepModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false
    });
  }

  backLineFirstStep() {
    this.registerLineSecondStepModalRef.hide();
    this.modalRef = this.modalService.show(RegisterLineModalComponent, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false
    });
    this.modalRef.content.modalRef = this.modalRef;
  }

  registerLearnCheck(template: TemplateRef<any>) {
    this.registerLineSecondStepModalRef.hide()
    this.registerLearnCheckModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false
    });
  }

  registerToSuccess(template: TemplateRef<any>) {
    this.registerLearnCheckModalRef.hide();
    this.registerSuccessModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false
    });
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
