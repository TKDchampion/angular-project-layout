import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureArticleRoutingModule } from './feature-article-routing.module';
import { FeatureArticleComponent } from './feature-article.component';
import { CommonToolModule } from 'src/app/common-tool/common-tool.module';

@NgModule({
  declarations: [FeatureArticleComponent],
  imports: [CommonModule, FeatureArticleRoutingModule, CommonToolModule],
})
export class FeatureArticleModule {}
