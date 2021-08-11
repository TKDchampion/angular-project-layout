import { Component } from '@angular/core';
import { NewVideoItem, VideoModel } from '../member-collection/member-collection.model';

@Component({
  selector: 'app-member-history',
  templateUrl: './member-history.component.html',
  styleUrls: ['./member-history.component.scss'],
})
export class MemberHistoryComponent {
  fakeVideoItemData = NewVideoItem;
  historyList: { group: string; videoItem: VideoModel[] }[] | undefined;

  constructor() {
    this.organisation(this.fakeVideoItemData);
    console.log('this.historyList :>> ', this.historyList);
  }

  organisation(array: VideoModel[]): void {
    const result = array.reduce((obj: Record<string, unknown>, item) => {
      obj[item.date] = 1;
      return obj;
    }, {});
    const grouplist = Object.keys(result);
    this.historyList = grouplist.map((item) => ({
      group: item,
      videoItem: array.filter((data) => data.date === item),
    }));
  }
}
