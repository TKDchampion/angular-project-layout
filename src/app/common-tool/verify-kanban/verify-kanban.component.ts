import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-verify-kanban',
  templateUrl: './verify-kanban.component.html',
  styleUrls: ['./verify-kanban.component.scss'],
})
export class VerifyKanbanComponent implements OnInit{
  verifyUserModalRef!: BsModalRef;
  salesCodeModalRef!: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openVerify(template: TemplateRef<unknown>): void {
    this.verifyUserModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }
  openSalesInviteModal(template: TemplateRef<unknown>): void {
    this.salesCodeModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }
}
