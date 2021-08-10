import { Component } from '@angular/core';
import { NewArticle, NewVideoItem, TabListModel } from './member-collection.model';

@Component({
  selector: 'app-member-collection',
  templateUrl: './member-collection.component.html',
  styleUrls: ['./member-collection.component.scss'],
})
export class MemberCollectionComponent {
  tabList: TabListModel[] = [
    { name: '課程影片', active: true },
    { name: '專題文章', active: false },
  ];
  selectedTab = '課程影片';
  fakeVideoItemData = NewVideoItem;
  fakeArticleItemData = NewArticle;

  selectTab(item: TabListModel): void {
    this.tabList.forEach((i) => (i.active = false));
    item.active = true;
    this.selectedTab = item.name;
  }
}
