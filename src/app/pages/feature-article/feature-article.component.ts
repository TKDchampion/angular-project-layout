import { Component } from '@angular/core';
import { NewArticle } from '../home/home.model';

@Component({
  selector: 'app-feature-article',
  templateUrl: './feature-article.component.html',
  styleUrls: ['./feature-article.component.scss'],
})
export class FeatureArticleComponent {
  newArticle = NewArticle;
}
