import { Component, HostListener, Input } from '@angular/core';
import { ResizeEvent, ResizeService } from 'src/app/services/resize.service';
import { NewActiveItemInfoNewArticleModel } from './new-active.model';

@Component({
  selector: 'app-new-active',
  templateUrl: './new-active.component.html',
  styleUrls: ['./new-active.component.scss'],
})
export class NewActiveComponent {
  @HostListener('window:resize', ['$event'])
  onResize(event: ResizeEvent): void {
    const size = this.resizeService.detectSize(event.target.innerWidth);
    this.breakpointSize = this.delectbreakpoint(size);
  }
  @Input() newActiveItemInfo!: NewActiveItemInfoNewArticleModel;

  breakpointSize: boolean | undefined;

  constructor(private resizeService: ResizeService) {
    const size = this.resizeService.default();
    this.breakpointSize = this.delectbreakpoint(size);
  }

  private delectbreakpoint(size: string): boolean {
    console.log('size :>> ', size);
    return size === 'xs' || size === 'sm';
  }
}
