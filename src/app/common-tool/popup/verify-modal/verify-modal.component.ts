import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { timer, Subscription } from 'rxjs';

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
  codeInvalid = false;
  resentCodeTime = 60;
  timeSubsrcibe!: Subscription;
  constructor() { }

  ngOnInit(): void {
    this.startTime();
  }

  startTime() {
    this.resentCodeTime = 60;
    const time = timer(0, 1000);
    this.timeSubsrcibe = time.subscribe(_ => {
      this.resentCodeTime = this.resentCodeTime - 1;
      if (this.resentCodeTime === 0) {
        this.timeSubsrcibe.unsubscribe();
      }
    });
  }

  ngOnDestroy(): void {
    this.timeSubsrcibe.unsubscribe();
  }

  resendVerifyCode() {
    this.codeInvalid = false;
    this.startTime();
  }

  submitVerifyCode() {
    this.modalRef.hide();
    this.verifyStatus.emit(true);
  }

}
