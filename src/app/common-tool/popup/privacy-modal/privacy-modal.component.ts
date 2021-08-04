import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-privacy-modal',
  templateUrl: './privacy-modal.component.html',
  styleUrls: ['./privacy-modal.component.scss']
})
export class PrivacyModalComponent implements OnInit {
  @Input() modalRef!: BsModalRef;
  @Output() closePrivacy = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.modalRef.hide();
    this.closePrivacy.emit(true);
  }

}
