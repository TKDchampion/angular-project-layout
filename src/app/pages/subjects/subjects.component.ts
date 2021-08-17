import { Component, HostListener, OnInit } from '@angular/core';
import { ResizeEvent, ResizeService } from 'src/app/services/resize.service';
import { HotSubjectItemInfo } from './subjects.model';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  breakpointSize: string | undefined;
  hotSubjectArray = HotSubjectItemInfo;
  constructor(private resizeService: ResizeService) {
    this.breakpointSize = this.resizeService.default();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: ResizeEvent): void {
    this.breakpointSize = this.resizeService.detectSize(event.target.innerWidth);
  }
  ngOnInit(): void {
  }

}
