import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-forget-password-modal',
  templateUrl: './forget-password-modal.component.html',
  styleUrls: ['./forget-password-modal.component.scss']
})
export class ForgetPasswordModalComponent implements OnInit {
  @Input() modalRef!: BsModalRef;
  remindModalRef!: BsModalRef;
  @Input() title!: string;
  @Input() subTitle!: string;
  verifyMail = '';
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  submit(template: TemplateRef<any>) {
    this.modalRef.hide();
    this.remindModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false
    });
  }

  close() {
    this.remindModalRef.hide();
  }
}
