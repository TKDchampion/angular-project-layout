import { Component } from '@angular/core';
import { GlobalStateService } from '../core/services/global-state.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  constructor(private state: GlobalStateService) {
    this.state.subscribe('test', (item) => {
      console.log(item);
      // this.state.unsubscribe('test');
    });

    this.state.subscribe('test2', (item) => {
      console.log(item);
      // this.state.unsubscribe('test');
    });
  }
}
