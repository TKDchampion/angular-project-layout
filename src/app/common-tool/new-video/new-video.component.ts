import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EveService } from 'src/app/services/env.service';
import { LoginModalComponent } from '../popup/login-modal/login-modal.component';
import { NewVideoItemInfoNewArticleModel } from './new-video.model';

@Component({
  selector: 'app-new-video',
  templateUrl: './new-video.component.html',
  styleUrls: ['./new-video.component.scss'],
})
export class NewVideoComponent {
  @Input() newVideoItem!: NewVideoItemInfoNewArticleModel;
  modalRef!: BsModalRef;
  identity = this.envService.getEnv('identity');
  constructor(private envService: EveService, private modalService: BsModalService, private router: Router) { }

  clickVideo(newVideoItem: NewVideoItemInfoNewArticleModel) {
    if (this.identity === 1) {
      this.login();
    } else {
      this.router.navigate([`/pages/feature-video`, newVideoItem.type ,newVideoItem.id]);
    }
  }

  login() {
    this.modalRef = this.modalService.show(LoginModalComponent, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
    this.modalRef.content.modalRef = this.modalRef;
  }
}
