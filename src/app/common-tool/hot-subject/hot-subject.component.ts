import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ResizeEvent, ResizeService } from 'src/app/services/resize.service';
import { HotSubjectItemInfoNewArticleModel } from './hot-subject.model';

@Component({
  selector: 'app-hot-subject',
  templateUrl: './hot-subject.component.html',
  styleUrls: ['./hot-subject.component.scss'],
})
export class HotSubjectComponent {
  @HostListener('window:resize', ['$event'])
  onResize(event: ResizeEvent): void {
    this.breakpointSize = this.resizeService.detectSize(event.target.innerWidth);
  }
  @Input() hotSubjectItemInfo!: HotSubjectItemInfoNewArticleModel;
  breakpointSize: string | undefined;

  constructor(private resizeService: ResizeService, private router: Router) {
    this.breakpointSize = this.resizeService.default();
  }

  gotoSubjectItem(subjectItem: string): void {
    this.router.navigate([`/pages/subject`, subjectItem]);
  }
}
