import { CommonToolModule } from 'src/app/common-tool/common-tool.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureDownloadRoutingModule } from './feature-download-routing.module';
import { FeatureDownloadComponent } from './feature-download.component';
import { FeatureDownloadDetailpageComponent } from './feature-download-detailpage/feature-download-detailpage.component';


@NgModule({
  declarations: [
    FeatureDownloadComponent,
    FeatureDownloadDetailpageComponent
  ],
  imports: [
    CommonModule,
    CommonToolModule,
    FeatureDownloadRoutingModule
  ]
})
export class FeatureDownloadModule { }
