import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EveService } from 'src/app/services/env.service';
import { ResizeEvent, ResizeService } from 'src/app/services/resize.service';
import { LoginModalComponent } from '../popup/login-modal/login-modal.component';
import { NewActiveItemInfoNewArticleModel } from './new-active.model';

@Component({
  selector: 'app-new-active',
  templateUrl: './new-active.component.html',
  styleUrls: ['./new-active.component.scss'],
})
export class NewActiveComponent {
  @HostListener('window:resize', ['$event'])
  onResize(event: ResizeEvent): void {
    const size = this.resizeService.detectSize(event.target.innerWidth);
    this.breakpointSize = this.delectbreakpoint(size);
  }
  @Input() newActiveItemInfo!: NewActiveItemInfoNewArticleModel;

  breakpointSize: boolean | undefined;
  modalRef!: BsModalRef;
  identity = this.envService.getEnv('identity');
  constructor(private resizeService: ResizeService, private envService: EveService, private modalService: BsModalService, private router: Router) {
    const size = this.resizeService.default();
    this.breakpointSize = this.delectbreakpoint(size);
  }

  clickActive(newArticleItem: NewActiveItemInfoNewArticleModel) {
    if (this.identity === 1) {
      this.login();
    } else {
      this.goActiveDetail(newArticleItem.id);
    }
  }

  goActiveDetail(id: string): void {
    this.router.navigate(['pages/feature-active', id]);
  }

  login() {
    this.modalRef = this.modalService.show(LoginModalComponent, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
    this.modalRef.content.modalRef = this.modalRef;
  }

  private delectbreakpoint(size: string): boolean {
    return size === 'xs' || size === 'sm';
  }
}
