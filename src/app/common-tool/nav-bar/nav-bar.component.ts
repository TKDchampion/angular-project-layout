import { Component, HostListener, OnInit } from '@angular/core';
import { EveService } from 'src/app/services/env.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  showSearchInput = false;
  showSearchInputMobile = false;
  isCollapsed = true;
  identity = this.envService.getEnv('identity');
  constructor(private envService: EveService) {}

  ngOnInit(): void {
    console.log('identity', this.envService.getEnv('identity'));
  }

  @HostListener('window:resize', ['$event'])
  onResize(_: any) {
    this.isCollapsed = true;
    this.showSearchInputMobile = false;
  }

  collapsedStatus() {
    this.isCollapsed = !this.isCollapsed;
    this.showSearchInputMobile = false;
  }
}
