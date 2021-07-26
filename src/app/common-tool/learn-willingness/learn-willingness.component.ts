import { Component, Input } from '@angular/core';
import { LearnWillingnessNewArticleModel } from './learn-willingness.modal';

@Component({
  selector: 'app-learn-willingness',
  templateUrl: './learn-willingness.component.html',
  styleUrls: ['./learn-willingness.component.scss'],
})
export class LearnWillingnessComponent {
  @Input() learnWillingness!: LearnWillingnessNewArticleModel;
}
