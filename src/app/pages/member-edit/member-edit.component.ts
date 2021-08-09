import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalService } from 'src/app/common-tool/toast/toast.services';
import { EveService } from 'src/app/services/env.service';
import { MenuInfo } from './member-edit.model';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss'],
})
export class MemberEditComponent {
  memberModalRef!: BsModalRef;
  identity = 1;
  isMailValidated = false;

  constructor(private envService: EveService, private modalService: BsModalService, private modalServices: ModalService) {
    this.identity = this.envService.getEnv('identity') as number;
    this.isMailValidated = this.envService.getEnv('isMailValidated') as boolean;
  }

  menulist: MenuInfo[] = [
    { name: '會員資料', active: true },
    { name: '瀏覽紀錄', active: false },
    { name: '我的收藏', active: false },
  ];
  activeStatus = '會員資料';

  selectMenu(item: MenuInfo): void {
    this.menulist.forEach((i) => (i.active = false));
    this.activeStatus = item.name;
    item.active = true;
  }

  openBindPopup(template: TemplateRef<unknown>): void {
    this.memberModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
    });
  }

  openModal(id: string): void {
    this.modalServices.open(id);
  }
}
