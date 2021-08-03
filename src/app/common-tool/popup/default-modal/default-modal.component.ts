import { close } from 'src/app/core/store/flag/flag.actions';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-default-modal',
  templateUrl: './default-modal.component.html',
  styleUrls: ['./default-modal.component.scss']
})
export class DefaultModalComponent implements OnInit {
  @Input() modalRef!: BsModalRef;
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() showCancelIcon = true;
  constructor() { }

  ngOnInit(): void {
  }
}
