import { SalesInviteComponent } from './../sales-invite/sales-invite.component';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-verify-user-modal',
  templateUrl: './verify-user-modal.component.html',
  styleUrls: ['./verify-user-modal.component.scss']
})
export class VerifyUserModalComponent implements OnInit {
  @Input() modalRef!: BsModalRef;
  @Output() startVerify = new EventEmitter<boolean>();
  @Output() getInvite = new EventEmitter<boolean>();
  remindModalRef!: BsModalRef;
  salesCodeModalRef!: BsModalRef;
  verifyMail = 'test@gmail.com';
  verifyPhone = '0912345678';
  inviteCode = '';
  hasInviteCode = false;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openInviteCode(): void {
    this.modalRef.hide();
    this.getInvite.emit(true);
  }

  submitVerify(template: TemplateRef<unknown>): void {
    this.modalRef.hide();
    this.remindModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
    this.startVerify.emit(true);
  }

  closeRemindModal(): void {
    this.remindModalRef.hide();
  }
}
