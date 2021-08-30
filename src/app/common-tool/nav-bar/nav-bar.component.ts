import { RegisterModalComponent } from './../popup/register-modal/register-modal.component';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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
  registerModalRef!: BsModalRef;
  startScroll = false;
  constructor(private envService: EveService, private modalService: BsModalService) {}
  @ViewChild('search') searchElement!: ElementRef;
  ngOnInit(): void {
    console.log('identity', this.envService.getEnv('identity'));
  }

  @HostListener('window:resize', ['$event'])
  onResize(_: any): void {
    this.isCollapsed = true;
    this.showSearchInputMobile = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.startScroll = window.scrollY > 0;
  }

  searchClick(): void {
    this.showSearchInput = !this.showSearchInput;
    if (this.showSearchInput) {
      setTimeout(() => {
        // this will make the execution after the above boolean has changed
        this.searchElement.nativeElement.focus();
      }, 0);
    }
  }

  collapsedStatus(): void {
    this.isCollapsed = !this.isCollapsed;
    this.showSearchInputMobile = false;
  }

  login(): void {
    this.modalRef = this.modalService.show(LoginModalComponent, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
    this.modalRef.content.modalRef = this.modalRef;
  }

  register(): void {
    this.registerModalRef = this.modalService.show(RegisterModalComponent, {
      class: 'modal-dialog-centered modal_max_width',
      ignoreBackdropClick: true,
      keyboard: false,
    });
    this.registerModalRef.content.modalRef = this.registerModalRef;
  }

  closeCollapsed(): void {
    this.isCollapsed = true;
  }
}
