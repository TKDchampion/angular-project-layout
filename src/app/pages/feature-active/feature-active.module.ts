import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureActiveRoutingModule } from './feature-active-routing.module';
import { FeatureActiveComponent } from './feature-active.component';
import { CommonToolModule } from 'src/app/common-tool/common-tool.module';
import { FeatureActiveDetailComponent } from './feature-active-detail/feature-active-detail.component';

@NgModule({
  declarations: [FeatureActiveComponent, FeatureActiveDetailComponent],
  imports: [CommonModule, FeatureActiveRoutingModule, CommonToolModule],
})
export class FeatureActiveModule {}
