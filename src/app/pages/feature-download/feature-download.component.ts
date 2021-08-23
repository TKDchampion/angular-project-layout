import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResizeEvent, ResizeService } from 'src/app/services/resize.service';
import { FilesList, FolderName } from './feature-download.model';

@Component({
  selector: 'app-feature-download',
  templateUrl: './feature-download.component.html',
  styleUrls: ['./feature-download.component.scss']
})
export class FeatureDownloadComponent implements OnInit {
  isMobile = false;
  folder = FolderName;
  filesList = FilesList;
  showDemoSearchList = false;
  searchText = '';
  constructor(private resizeService: ResizeService,private router: Router) {
    this.isMobile = this.detectWindowSize(this.resizeService.default());
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: ResizeEvent): void {
    const size = this.resizeService.detectSize(event.target.innerWidth);
    this.isMobile = this.detectWindowSize(size);
  }
  ngOnInit(): void {
  }

  gotoDownloadItem(id: string): void {
    this.router.navigate([`/pages/feature-download`, id]);
  }

  getSearchText(text: string): void {
    this.searchText = text;
  }

  private detectWindowSize(size: string): boolean {
    const mobileSize = ['sm', 'xs'];
    return mobileSize.find((i) => i === size) ? true : false;
  }
}
