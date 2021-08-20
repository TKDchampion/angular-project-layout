import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeatureVideoItem } from './feature-video.model';

@Component({
  selector: 'app-feature-video',
  templateUrl: './feature-video.component.html',
  styleUrls: ['./feature-video.component.scss']
})
export class FeatureVideoComponent implements OnInit {
  videoRecommendItem = FeatureVideoItem;
  videoType!: string | null;
  searchText = '';
  constructor(private route: ActivatedRoute, private router: Router) {
    router.events.subscribe((val: unknown) => {
      this.videoType = this.route.snapshot.paramMap.get('type');
    })
  }

  ngOnInit(): void {
    this.videoType = this.route.snapshot.paramMap.get('type');
  }

  goBack() {
    this.router.navigate([`/pages/feature-video`]);
  }

  goToType() {
    this.router.navigate([`/pages/feature-video`, '醫務管理']);
  }

  getSearchText(text: string) {
    this.searchText = text;
  }

}
