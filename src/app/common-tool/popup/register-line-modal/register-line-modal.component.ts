import { AfterContentInit, Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalService } from '../../toast/toast.services';
import { RegisterJobModal, RegisterUserInfoModal } from '../register-modal/register.modal';

@Component({
  selector: 'app-register-line-modal',
  templateUrl: './register-line-modal.component.html',
  styleUrls: ['./register-line-modal.component.scss']
})
export class RegisterLineModalComponent implements OnInit, AfterContentInit {
  @Input() modalRef!: BsModalRef;
  @Input() title = '註冊';
  @Input() subTitle = '註冊後即可瀏覽影片與文章';
  @Input() registerIdentity!: boolean;
  @Input() isEdit = false;
  @Input() registerUserInfo: RegisterUserInfoModal = {
    nickname: '',
    firstname: '',
    lastname: '',
    phone: ''
  };
  registerLineFirstStepModalRef!: BsModalRef;
  registerLineSecondStepModalRef!: BsModalRef;
  registerLearnCheckModalRef!: BsModalRef;
  registerSuccessModalRef!: BsModalRef;
  checkIsDoctorModalRef!: BsModalRef;
  registerJob: RegisterJobModal = {
    job: '',
    jobCompany: '',
    jobCity: '',
    jobType: ''
  };
  isJobEmpty = false;
  isJobCityEmpty = false;
  isJobTypeEmpty = false;
  constructor(private modalService: BsModalService, private modalServices: ModalService) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.isEdit);

    if (this.isEdit) {
      this.subTitle = '';
    }
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
    this.modalRef.content.title = this.title;
    this.modalRef.content.subTitle = this.subTitle;
    this.modalRef.content.isEdit = this.isEdit;
    this.modalRef.content.registerUserInfo = this.registerUserInfo;
    this.modalRef.content.registerJob = this.registerJob;
    this.modalRef.content.registerIdentity = this.registerIdentity;
  }

  // backLineFirstStep($event: any) {
  //   this.registerLineSecondStepModalRef.hide();
  //   this.modalRef = this.modalService.show(RegisterLineModalComponent, {
  //     class: 'modal-dialog-centered modal_max_width',
  //     ignoreBackdropClick: true,
  //     keyboard: false
  //   });
  //   this.modalRef.content.modalRef = this.modalRef;
  //   this.modalRef.content.title = this.title;
  //   this.modalRef.content.isEdit = this.isEdit;
  //   this.modalRef.content.registerUserInfo = this.registerUserInfo;
  //   this.modalRef.content.registerJob = $event.job;
  //   this.modalRef.content.registerIdentity = $event.registerIdentity;
  // }

  registerLearnCheck(template: TemplateRef<any>) {
    this.registerLineSecondStepModalRef.hide();
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

  openCheckDoctorModal(template: TemplateRef<any>) {
    debugger
    if (this.registerIdentity) {
      this.checkIsDoctorModalRef = this.modalService.show(template, {
        class: 'modal-dialog-centered modal-sm',
        ignoreBackdropClick: true,
        keyboard: false
      });
    } else {
      this.openModal('edit-member-1')
      this.registerLineSecondStepModalRef.hide();
    }
  }

  cancel() {
    this.checkIsDoctorModalRef.hide();
  }

  isDoctor() {
    this.openModal('edit-member-1');
    this.checkIsDoctorModalRef.hide();
    this.registerLineSecondStepModalRef.hide();

  }

  openModal(id: string): void {
    this.modalServices.open(id);
  }
}
