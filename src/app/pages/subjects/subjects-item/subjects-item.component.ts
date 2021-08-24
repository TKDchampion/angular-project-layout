import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotSubjectItemInfoNewArticleModel } from 'src/app/common-tool/hot-subject/hot-subject.model';
import { HotSubjectItemInfo } from '../subjects.model';
import { NewArticle, NewVideoItem, TabListModel, VideoRecommendItem } from './subjects-item.model';

@Component({
  selector: 'app-subjects-item',
  templateUrl: './subjects-item.component.html',
  styleUrls: ['./subjects-item.component.scss']
})
export class SubjectsItemComponent implements OnInit {
  tabList: TabListModel[] = [
    { name: '課程影片', active: true },
    { name: '專題文章', active: false },
  ];
  selectedTab = '課程影片';
  fakeVideoItemData = NewVideoItem;
  videoRecommendItem = VideoRecommendItem;
  fakeArticleItemData = NewArticle;
  hotSubjectArray = HotSubjectItemInfo;
  subjectItem: HotSubjectItemInfoNewArticleModel | undefined;
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.subjectItem = this.hotSubjectArray.find(i => i.id === id);
  }

  selectTab(item: TabListModel): void {
    this.tabList.forEach((i) => (i.active = false));
    item.active = true;
    this.selectedTab = item.name;
  }

  backToSubject() {
    this.router.navigate([`/pages/subject`]);
  }
}
