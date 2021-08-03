import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-verify-modal',
  templateUrl: './verify-modal.component.html',
  styleUrls: ['./verify-modal.component.scss']
})
export class VerifyModalComponent implements OnInit {
  @Input() modalRef!: BsModalRef;
  @Input() title!: string;
  @Input() subTitle!: string;
  @Output() verifyStatus = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  submitVerifyCode() {
    this.modalRef.hide();
    this.verifyStatus.emit(true);
  }

}
