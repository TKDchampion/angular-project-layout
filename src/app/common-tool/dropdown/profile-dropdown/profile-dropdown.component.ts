import { Component, Input, TemplateRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { clickValue } from 'src/app/core/store/profileDrap/profileDrop.actions';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.scss'],
})
export class ProfileDropdownComponent {
  @Input() identity!: unknown;
  modalRef!: BsModalRef;
  verifyUserModalRef!: BsModalRef;
  salesCodeModalRef!: BsModalRef;
  constructor(private modalService: BsModalService, private storeValue: Store<{ clickValue: { value: string } }>) {}

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

  set(item: string): void {
    this.storeValue.dispatch(clickValue({ value: item }));
  }
}
