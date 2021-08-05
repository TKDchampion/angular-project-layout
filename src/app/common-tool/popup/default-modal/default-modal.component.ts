import { close } from 'src/app/core/store/flag/flag.actions';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-default-modal',
  templateUrl: './default-modal.component.html',
  styleUrls: ['./default-modal.component.scss']
})
export class DefaultModalComponent implements OnInit {
  @Input() modalRef!: BsModalRef;
  recheckModalRef!: BsModalRef;
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() showCancelIcon = true;
  @Input() needRecheck = false;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  closePopup(template: TemplateRef<any>) {
    this.needRecheck ? this.openRecheckModal(template) : this.modalRef.hide();
  }

  openRecheckModal(template: TemplateRef<any>) {
    this.recheckModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal-sm',
      ignoreBackdropClick: true,
      keyboard: false
    });
  }

  cancel() {
    this.recheckModalRef.hide();
  }
  abandon() {
    this.recheckModalRef.hide();
    this.modalRef.hide();
  }
}
