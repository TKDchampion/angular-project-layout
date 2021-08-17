import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureArticleComponent } from './feature-article.component';

const routes: Routes = [{ path: '', component: FeatureArticleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureArticleRoutingModule {}
