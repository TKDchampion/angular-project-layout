import { Component, HostListener, OnInit } from '@angular/core';
import { ResizeEvent, ResizeService } from 'src/app/services/resize.service';
// import { ResizeEvent, ResizeService } from 'src/app/services/resize.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isMobile = false;
  constructor(private resizeService: ResizeService) {
    this.isMobile = this.detectWindowSize(this.resizeService.default());
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: ResizeEvent): void {
    const size = this.resizeService.detectSize(event.target.innerWidth);
    this.isMobile = this.detectWindowSize(size);
  }
  ngOnInit(): void {
  }

  private detectWindowSize(size: string): boolean {
    const mobileSize = ['md', 'sm', 'xs'];
    return !!mobileSize.find(i => i === size) ? true : false;
  }
}
