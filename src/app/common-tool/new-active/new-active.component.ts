import { Component, Input } from '@angular/core';
import { NewActiveItemInfo } from './new-active.model';

@Component({
  selector: 'app-new-active',
  templateUrl: './new-active.component.html',
  styleUrls: ['./new-active.component.scss'],
})
export class NewActiveComponent {
  @Input() newActiveItemInfo!: NewActiveItemInfo;
}
