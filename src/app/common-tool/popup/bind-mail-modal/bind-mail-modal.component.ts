import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegisterAccountModal } from '../register-modal/register.modal';

@Component({
  selector: 'app-bind-mail-modal',
  templateUrl: './bind-mail-modal.component.html',
  styleUrls: ['./bind-mail-modal.component.scss']
})
export class BindMailModalComponent implements OnInit {
  @Input() modalRef!: BsModalRef;
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() showStepIcon = false;
  @Input() registerAccount!: RegisterAccountModal;
  @Input() verifyEmailStatus!: boolean;
  @Output() backStep = new EventEmitter<boolean>();
  @Output() register = new EventEmitter<boolean>();
  @Output() verifiedMail = new EventEmitter<boolean>();
  verifyEmailModalRef!: BsModalRef;
  privacyModalRef!: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  verifyEmail(template: TemplateRef<any>) {
    this.verifyEmailModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal-sm verify_email',
      ignoreBackdropClick: true,
      keyboard: false
    });
  }

  getVerifyStatus($event: boolean) {
    this.verifyEmailStatus = $event;
    this.verifiedMail.emit($event);
  }

  openPrivacyModal(template: TemplateRef<any>) {
    this.privacyModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false
    });
  }

  closePrivacyModal(_: boolean) {
    this.privacyModalRef.hide();
  }

  backStepModal() {
    this.modalRef.hide();
    this.backStep.emit(true);
  }

  registerModal() {
    this.modalRef.hide();
    this.register.emit(true);
  }
}
