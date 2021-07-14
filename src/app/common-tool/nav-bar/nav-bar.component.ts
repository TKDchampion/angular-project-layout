import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  showSearchInput = false;
  showSearchInputMobile = false;
  isCollapsed = true;
  constructor() { }

  ngOnInit(): void {
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
