import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-filter-dropdown',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.scss'],
})
export class FilterDropdownComponent {
  clickStatus = false;
  selected = '請選擇活動類別';
  dropList = ['全部', '線上研討會', '實體活動'];
  modalRef!: BsModalRef;

  constructor(private modalService: BsModalService) {}

  dropSelected(item: string): void {
    this.selected = item;
  }

  selectedBtn(template: HTMLButtonElement): void {
    this.clickStatus = !this.clickStatus;
    if (!this.clickStatus) {
      template.blur();
    }
  }

  openModal(template: TemplateRef<unknown>): void {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-fullscreen filter_modal',
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }
}
