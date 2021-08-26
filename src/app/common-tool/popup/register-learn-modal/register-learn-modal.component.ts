import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DemoLearnType, LearnType } from '../register-modal/register.modal';

@Component({
  selector: 'app-register-learn-modal',
  templateUrl: './register-learn-modal.component.html',
  styleUrls: ['./register-learn-modal.component.scss']
})
export class RegisterLearnModalComponent implements OnInit {
  @Input() modalRef!: BsModalRef;
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() onlyEdit = false;
  @Output() passSetLearn = new EventEmitter<boolean>();
  @Output() successSetLearn = new EventEmitter<boolean>();
  constructor() { }
  registerLearnCount = 0;
  demoLearnType = DemoLearnType;
  ngOnInit(): void {
    this.demoLearnType.forEach((i: LearnType) => i.isChecked = false);
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

  submitPass() {
    this.modalRef.hide();
    this.passSetLearn.emit(true);
  }

  submitSuccess() {
    this.modalRef.hide();
    this.successSetLearn.emit(true);
  }
}
