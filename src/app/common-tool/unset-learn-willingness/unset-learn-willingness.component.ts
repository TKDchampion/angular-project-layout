import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-unset-learn-willingness',
  templateUrl: './unset-learn-willingness.component.html',
  styleUrls: ['./unset-learn-willingness.component.scss']
})
export class UnsetLearnWillingnessComponent implements OnInit {
  modalRef!: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  setLearnModal(template: TemplateRef<unknown>): void {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }

  registerToSuccess() {

  }

}
