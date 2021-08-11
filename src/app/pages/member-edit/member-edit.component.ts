import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalService } from 'src/app/common-tool/toast/toast.services';
import { EveService } from 'src/app/services/env.service';
import { MenuInfo } from './member-edit.model';
import { Store } from '@ngrx/store';
import { clickValue } from 'src/app/core/store/profileDrap/profileDrop.actions';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss'],
})
export class MemberEditComponent {
  memberModalRef!: BsModalRef;
  identity = 1;
  isMailValidated = false;
  menulist: MenuInfo[] = [
    { name: '會員資料', key: 'member-profile', active: false, icon: 'profileIcon' },
    { name: '瀏覽紀錄', key: 'member-history', active: false, icon: 'timeCircleIcon' },
    { name: '我的收藏', key: 'member-collection', active: false, icon: 'bookmarkIcon' },
  ];

  constructor(
    private envService: EveService,
    private modalServices: ModalService,
    private router: Router,
    private storeValue: Store<{ clickValue: { value: string } }>,
  ) {
    this.identity = this.envService.getEnv('identity') as number;
    this.isMailValidated = this.envService.getEnv('isMailValidated') as boolean;
    this.getCurrentMenuStore();
  }

  getCurrentMenuStore(): void {
    this.storeValue.select('clickValue').subscribe((resp) => {
      if (resp.value) {
        this.menulist.forEach((i) => (i.active = false));
        const storeItem = this.menulist.find((i) => i.key === resp.value);
        storeItem ? (storeItem.active = true) : (this.menulist[0].active = true);
      } else {
        const defalut = this.menulist.find((i) => this.router.url === `/pages/member-edit/${i.key}`);
        defalut ? (defalut.active = true) : (this.menulist[0].active = true);
      }
    });
  }

  selectMenu(item: MenuInfo): void {
    this.storeValue.dispatch(clickValue({ value: item.key }));
    this.router.navigate([`pages/member-edit/${item.key}`]);
  }

  openModal(id: string): void {
    this.modalServices.open(id);
  }
}
