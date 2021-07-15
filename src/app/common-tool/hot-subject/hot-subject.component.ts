import { Component, Input } from '@angular/core';
import { HotSubjectItemInfo } from './hot-subject.model';

@Component({
  selector: 'app-hot-subject',
  templateUrl: './hot-subject.component.html',
  styleUrls: ['./hot-subject.component.scss'],
})
export class HotSubjectComponent {
  @Input() hotSubjectItemInfo!: HotSubjectItemInfo;
}
