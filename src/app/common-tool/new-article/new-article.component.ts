import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EveService } from 'src/app/services/env.service';
import { LoginModalComponent } from '../popup/login-modal/login-modal.component';
import { NewArticleModel } from './new-article.modal';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss'],
})
export class NewArticleComponent {
  @Input() newArticle!: NewArticleModel;
  modalRef!: BsModalRef;
  identity = this.envService.getEnv('identity');
  constructor(private envService: EveService, private modalService: BsModalService, private router: Router) { }

  clickArticle(newArticleItem: NewArticleModel) {
    if (this.identity === 1) {
      this.login();
    } else {
      this.goArticleDetail(newArticleItem.id);
    }
  }

  goArticleDetail(id: string): void {
    this.router.navigate(['pages/feature-article', id]);
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
