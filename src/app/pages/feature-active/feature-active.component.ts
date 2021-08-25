import { Component } from '@angular/core';
import { NewActiveItemInfo } from '../home/home.model';

@Component({
  selector: 'app-feature-active',
  templateUrl: './feature-active.component.html',
  styleUrls: ['./feature-active.component.scss'],
})
export class FeatureActiveComponent {
  newActiveItemInfo = NewActiveItemInfo;

  constructor() {}
}
