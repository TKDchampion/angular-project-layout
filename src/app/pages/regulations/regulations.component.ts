import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MenuInfo } from '../member-edit/member-edit.model';
import { clickValue } from 'src/app/core/store/profileDrap/profileDrop.actions';

@Component({
  selector: 'app-regulations',
  templateUrl: './regulations.component.html',
  styleUrls: ['./regulations.component.scss']
})
export class RegulationsComponent implements OnInit {
  menulist: MenuInfo[] = [
    { name: '關於我們', key: 'aboutus', active: false, icon: 'aboutUsIcon' },
    { name: '聯絡我們', key: 'contactus', active: false, icon: 'contactUsIcon' },
    { name: '使用條款', key: 'terms-of-use', active: false, icon: 'documentIcon' },
    { name: '隱私權政策', key: 'privacy', active: false, icon: 'privacyIcon' },
  ];
  constructor(
    private router: Router,
    private storeValue: Store<{ clickValue: { value: string } }>,
  ) {
    this.getCurrentMenuStore();
   }

  ngOnInit(): void {
  }

  getCurrentMenuStore(): void {
    this.storeValue.select('clickValue').subscribe((resp) => {
      if (resp.value) {
        this.menulist.forEach((i) => (i.active = false));
        const storeItem = this.menulist.find((i) => i.key === resp.value);
        storeItem ? (storeItem.active = true) : (this.menulist[0].active = true);
      } else {
        const defalut = this.menulist.find((i) => this.router.url === `/pages/regulations/${i.key}`);
        defalut ? (defalut.active = true) : (this.menulist[0].active = true);
      }
    });
  }

  selectMenu(item: MenuInfo): void {
    this.storeValue.dispatch(clickValue({ value: item.key }));
    this.router.navigate([`pages/regulations/${item.key}`]);
  }

}
