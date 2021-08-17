import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalService } from '../../toast/toast.services';
import { RegisterJobModal } from '../register-modal/register.modal';

@Component({
  selector: 'app-regisiter-job-modal',
  templateUrl: './regisiter-job-modal.component.html',
  styleUrls: ['./regisiter-job-modal.component.scss']
})
export class RegisiterJobModalComponent implements OnInit {
  @Input() modalRef!: BsModalRef;
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() registerIdentity!: boolean;
  @Input() isEdit = false;
  @Input() registerJob: RegisterJobModal = {
    job: '',
    jobCompany: '',
    jobCity: '',
    jobType: ''
  };
  @Output() backFirstStep = new EventEmitter<unknown>();
  @Output() gotoLearnCkech = new EventEmitter<boolean>();
  isJobEmpty = false;
  isJobCityEmpty = false;
  isJobTypeEmpty = false;
  constructor(private modalServices: ModalService) { }

  ngOnInit(): void {
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

  backLineFirstStep() {
    const backStorageJob = {
      job: this.registerJob,
      registerIdentity: this.registerIdentity
    };
    this.backFirstStep.emit(backStorageJob);
  }

  registerLearnCheck() {
    console.log('registerLearnCheck');
    this.gotoLearnCkech.emit(true);
  }

  openCheckDoctorModal() {
    // this.openModal('edit-member-1');
    // this.modalRef.hide();
    this.gotoLearnCkech.emit(true);
    console.log('openCheckDoctorModal');
  }

  openModal(id: string): void {
    this.modalServices.open(id);
  }
}
