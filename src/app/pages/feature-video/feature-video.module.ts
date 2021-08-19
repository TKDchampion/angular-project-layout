import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureVideoRoutingModule } from './feature-video-routing.module';
import { FeatureVideoComponent } from './feature-video.component';
import { CommonToolModule } from 'src/app/common-tool/common-tool.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FeatureVideoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    CommonToolModule,
    FeatureVideoRoutingModule
  ]
})
export class FeatureVideoModule { }
