import { Component, HostListener, OnInit } from '@angular/core';
import { ResizeEvent, ResizeService } from 'src/app/services/resize.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  brandCount = 4;
  constructor(private resizeService: ResizeService) {
    this.brandCount = this.detectWindowSize(this.resizeService.default()) ? 2 : 4;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: ResizeEvent): void {
    const size = this.resizeService.detectSize(event.target.innerWidth);
    this.brandCount = this.detectWindowSize(size) ? 2 : 4;
  }
  ngOnInit(): void {
  }

  private detectWindowSize(size: string): boolean {
    const mobileSize = ['sm', 'xs'];
    return mobileSize.find((i) => i === size) ? true : false;
  }
}
