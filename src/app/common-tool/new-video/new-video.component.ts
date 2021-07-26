import { Component, Input } from '@angular/core';
import { NewVideoItemInfoNewArticleModel } from './new-video.model';

@Component({
  selector: 'app-new-video',
  templateUrl: './new-video.component.html',
  styleUrls: ['./new-video.component.scss'],
})
export class NewVideoComponent {
  @Input() newVideoItem!: NewVideoItemInfoNewArticleModel;
}
