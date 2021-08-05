import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-forget-password-modal',
  templateUrl: './forget-password-modal.component.html',
  styleUrls: ['./forget-password-modal.component.scss']
})
export class ForgetPasswordModalComponent implements OnInit {
  @Input() modalRef!: BsModalRef;
  @Input() title!: string;
  @Input() subTitle!: string;
  verifyMail = '';
  constructor() { }

  ngOnInit(): void {
  }

}
