import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EveService } from 'src/app/services/env.service';
import { RegisterModalComponent } from '../popup/register-modal/register-modal.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  identity = this.envService.getEnv('identity');
  registerModalRef!: BsModalRef;
  constructor(private envService: EveService,private modalService: BsModalService) {}

  ngOnInit(): void {}

  register() {
    this.registerModalRef = this.modalService.show(RegisterModalComponent, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false
    });
    this.registerModalRef.content.modalRef = this.registerModalRef;
  }
}
