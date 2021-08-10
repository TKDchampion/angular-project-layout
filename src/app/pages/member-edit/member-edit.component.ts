import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ForgetPasswordModalComponent } from 'src/app/common-tool/popup/forget-password-modal/forget-password-modal.component';
import { RegisterAccountModal } from 'src/app/common-tool/popup/register-modal/register.modal';
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
  menulist: MenuInfo[] = [
    { name: '會員資料', active: false },
    { name: '瀏覽紀錄', active: false },
    { name: '我的收藏', active: true },
  ];
  activeStatus: string | undefined;

  constructor(private envService: EveService, private modalService: BsModalService, private modalServices: ModalService) {
    this.identity = this.envService.getEnv('identity') as number;
    this.isMailValidated = this.envService.getEnv('isMailValidated') as boolean;
    this.activeStatus = this.menulist.find((i) => i.active === true)?.name;
  }

  selectMenu(item: MenuInfo): void {
    this.menulist.forEach((i) => (i.active = false));
    this.activeStatus = item.name;
    item.active = true;
  }

  openModal(id: string): void {
    this.modalServices.open(id);
  }
}
