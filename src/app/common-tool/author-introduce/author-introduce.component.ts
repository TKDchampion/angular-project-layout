import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-author-introduce',
  templateUrl: './author-introduce.component.html',
  styleUrls: ['./author-introduce.component.scss'],
})
export class AuthorIntroduceComponent {
  @Input() setting!: {
    title: string;
    img: string;
    authorName: string;
    authorText: string;
  };

  titleStyle = {
    'font-size': '20px',
  };
}
