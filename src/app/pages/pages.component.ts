import { Component } from '@angular/core';
// import { GlobalStateConstant } from '../core/constant/global-state.constant';
// import { GlobalStateService } from '../core/services/global-state.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  // constructor(private state: GlobalStateService) {
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   console.log((window as { [key: string]: any }).__env.Test);
  //   this.state.subscribe(GlobalStateConstant.test1.cmd, (item) => {
  //     console.log(item);
  //     // this.state.unsubscribe('test');
  //   });
  //   this.state.subscribe(GlobalStateConstant.test2.cmd, (item) => {
  //     console.log(item);
  //     // this.state.unsubscribe('test');
  //   });
  // }
}
