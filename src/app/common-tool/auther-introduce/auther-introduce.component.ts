import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auther-introduce',
  templateUrl: './auther-introduce.component.html',
  styleUrls: ['./auther-introduce.component.scss'],
})
export class AutherIntroduceComponent {
  @Input() setting!: {
    title: string;
    img: string;
    autherName: string;
    autherText: string;
  };
}
