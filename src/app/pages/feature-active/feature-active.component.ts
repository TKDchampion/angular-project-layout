import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewActiveItemInfo } from '../home/home.model';

@Component({
  selector: 'app-feature-active',
  templateUrl: './feature-active.component.html',
  styleUrls: ['./feature-active.component.scss'],
})
export class FeatureActiveComponent {
  newActiveItemInfo = NewActiveItemInfo;

  constructor(private router: Router) {}

  goActiveDetail(id: string): void {
    this.router.navigate(['pages/feature-active', id]);
  }
}
