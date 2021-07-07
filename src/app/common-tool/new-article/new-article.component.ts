import { Component, Input, OnInit } from '@angular/core';
import { NewArticle } from './new-article.modal';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss'],
})
export class NewArticleComponent implements OnInit {
  @Input() newArticle!: NewArticle;
  constructor() { }

  ngOnInit(): void { }
}
