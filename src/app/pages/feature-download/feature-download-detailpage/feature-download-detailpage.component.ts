import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResizeEvent, ResizeService } from 'src/app/services/resize.service';
import { FilesList, FolderName } from '../feature-download.model';

@Component({
  selector: 'app-feature-download-detailpage',
  templateUrl: './feature-download-detailpage.component.html',
  styleUrls: ['./feature-download-detailpage.component.scss']
})
export class FeatureDownloadDetailpageComponent implements OnInit {
  isMobile = false;
  folder = FolderName;
  filesList = FilesList;
  folderTitle!: string | undefined;
  folderId!: string | null;

  constructor(private route: ActivatedRoute, private router: Router, private resizeService: ResizeService) {
    this.isMobile = this.detectWindowSize(this.resizeService.default());
    this.folderId = this.route.snapshot.paramMap.get('id');
    this.folderTitle = this.folder.find(i => i.id === this.folderId)?.name;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: ResizeEvent): void {
    const size = this.resizeService.detectSize(event.target.innerWidth);
    this.isMobile = this.detectWindowSize(size);
  }

  ngOnInit(): void {
  }

  backToDownload() {
    this.router.navigate([`/pages/feature-download`]);
  }

  private detectWindowSize(size: string): boolean {
    const mobileSize = ['sm', 'xs'];
    return mobileSize.find((i) => i === size) ? true : false;
  }
}
