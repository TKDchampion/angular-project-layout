import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewActiveItemInfoNewArticleModel } from 'src/app/common-tool/new-active/new-active.model';
import { NewActiveItemInfo } from '../../home/home.model';

@Component({
  selector: 'app-feature-active-detail',
  templateUrl: './feature-active-detail.component.html',
  styleUrls: ['./feature-active-detail.component.scss'],
})
export class FeatureActiveDetailComponent {
  detailData: NewActiveItemInfoNewArticleModel | undefined;
  titleStyle = {
    'font-size': '20px',
  };
  autherSetting = {
    title: '講者介紹',
    img: '../../../assets/img/fakeImge/new_video_fake_headshot.png',
    authorName: '林欣蓉 教授',
    authorText:
      '由擁有臺大醫院15年臨床經驗的恬兒職能治療師協助號召、聚集多種兒童發展醫學專業，來提供專業的育兒、教養知識。服務內容包含:專業/親職講座、幼童發展潛能評估、學前發展核心能力培養遊戲課程、學前發展核心能力培養遊戲課程、教具玩具開發。',
  };

  constructor(private routerActive: ActivatedRoute, private router: Router) {
    router.events.subscribe(() => {
      const id = this.routerActive.snapshot.paramMap.get('id');
      this.detailData = NewActiveItemInfo.find((i) => i.id === id);
    });
  }
}
