import { Component, HostListener, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EveService } from 'src/app/services/env.service';
import { LoginModalComponent } from '../popup/login-modal/login-modal.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  showSearchInput = false;
  showSearchInputMobile = false;
  isCollapsed = true;
  identity = this.envService.getEnv('identity');
  modalRef!: BsModalRef;
  constructor(private envService: EveService, private modalService: BsModalService) { }

  ngOnInit(): void {
    console.log('identity', this.envService.getEnv('identity'));
  }

  @HostListener('window:resize', ['$event'])
  onResize(_: any) {
    this.isCollapsed = true;
    this.showSearchInputMobile = false;
  }

  collapsedStatus() {
    this.isCollapsed = !this.isCollapsed;
    this.showSearchInputMobile = false;
  }

  login() {
    this.modalRef = this.modalService.show(LoginModalComponent, {
      class: 'modal-dialog-centered',
    });
    this.modalRef.content.modalRef = this.modalRef;
  }
}
