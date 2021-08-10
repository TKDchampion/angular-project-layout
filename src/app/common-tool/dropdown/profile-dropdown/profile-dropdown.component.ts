import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.scss']
})
export class ProfileDropdownComponent implements OnInit {
  @Input() identity!: any;
  modalRef!: BsModalRef;
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
