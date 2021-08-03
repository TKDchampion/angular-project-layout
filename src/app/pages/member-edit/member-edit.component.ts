import { Component } from '@angular/core';
import { MenuInfo } from './member-edit.model';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss'],
})
export class MemberEditComponent {
  menulist: MenuInfo[] = [
    { name: '會員資料', active: true },
    { name: '瀏覽紀錄', active: false },
    { name: '我的收藏', active: false },
  ];

  selectMenu(item: MenuInfo): void {
    this.menulist.forEach((i) => (i.active = false));
    item.active = true;
  }
}
