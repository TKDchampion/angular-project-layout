import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-article-detailpage',
  templateUrl: './feature-article-detailpage.component.html',
  styleUrls: ['./feature-article-detailpage.component.scss'],
})
export class FeatureArticleDetailpageComponent {
  titleStyle = {
    'font-size': '20px',
  };
  autherSetting = {
    title: '作者介紹',
    img: '../../../assets/img/fakeImge/new_video_fake_headshot.png',
    authorName: '林欣蓉 教授',
    authorText:
      '由擁有臺大醫院15年臨床經驗的恬兒職能治療師協助號召、聚集多種兒童發展醫學專業，來提供專業的育兒、教養知識。服務內容包含:專業/親職講座、幼童發展潛能評估、學前發展核心能力培養遊戲課程、學前發展核心能力培養遊戲課程、教具玩具開發。',
  };
}
