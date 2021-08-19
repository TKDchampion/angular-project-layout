import { Component, OnInit } from '@angular/core';
import { FeatureVideoItem } from './feature-video.model';

@Component({
  selector: 'app-feature-video',
  templateUrl: './feature-video.component.html',
  styleUrls: ['./feature-video.component.scss']
})
export class FeatureVideoComponent implements OnInit {
  videoRecommendItem = FeatureVideoItem;
  constructor() { }

  ngOnInit(): void {
  }

}
