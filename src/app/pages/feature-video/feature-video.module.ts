import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureVideoRoutingModule } from './feature-video-routing.module';
import { FeatureVideoComponent } from './feature-video.component';
import { CommonToolModule } from 'src/app/common-tool/common-tool.module';
import { FormsModule } from '@angular/forms';
import { FeatureVideoDetailpageComponent } from './feature-video-detailpage/feature-video-detailpage.component';


@NgModule({
  declarations: [
    FeatureVideoComponent,
    FeatureVideoDetailpageComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    CommonToolModule,
    FeatureVideoRoutingModule
  ]
})
export class FeatureVideoModule { }
