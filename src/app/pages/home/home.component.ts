import { Component } from '@angular/core';
import { GlobalStateConstant } from 'src/app/core/constant/global-state.constant';
import { GlobalStateService } from 'src/app/core/services/global-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private state: GlobalStateService) {}
  click(): void {
    this.state.notifyDataChanged(GlobalStateConstant.test1.cmd, Math.random());
  }
  click2(): void {
    this.state.notifyDataChanged(GlobalStateConstant.test2.cmd, Math.random());
  }
}
