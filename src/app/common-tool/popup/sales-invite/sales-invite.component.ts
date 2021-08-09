import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-sales-invite',
  templateUrl: './sales-invite.component.html',
  styleUrls: ['./sales-invite.component.scss']
})
export class SalesInviteComponent implements OnInit {
  @Input() modalRef!: BsModalRef;
  @Output() getInvite = new EventEmitter<boolean>();
  inviteCode = '';
  remindModalRef!: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  submitCodeVerify(template: TemplateRef<unknown>): void {
    this.modalRef.hide();
    this.remindModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
    console.log('in')
    this.getInvite.emit(true);
  }

  closeRemindModal(): void {
    this.remindModalRef.hide();
  }

}
