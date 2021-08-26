import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { WillingnessLearnItem } from './willingness-learn-model';

@Component({
  selector: 'app-willingness-learn',
  templateUrl: './willingness-learn.component.html',
  styleUrls: ['./willingness-learn.component.scss']
})
export class WillingnessLearnComponent implements OnInit {
  modalRef!: BsModalRef;
  learnModalRef!: BsModalRef;
  learnTitle = '全部';
  willingnessLearnType!: string;
  videoRecommendItem = WillingnessLearnItem;
  sort = false;
  clickStatus = false;
  selected = '最新';
  dropList = ['最新', '最多觀看'];
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<unknown>) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-fullscreen search_modal',
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }

  setLearnModal(template: TemplateRef<unknown>): void {
    this.learnModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }

  registerToSuccess() {
  }

  dropSelected(item: string): void {
    this.selected = item;
  }

  selectedBtn(template: HTMLButtonElement): void {
    this.clickStatus = !this.clickStatus;
    if (!this.clickStatus) {
      template.blur();
    }
  }

}
