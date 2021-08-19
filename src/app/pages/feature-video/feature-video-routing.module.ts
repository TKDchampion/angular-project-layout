import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureVideoComponent } from './feature-video.component';

const routes: Routes = [{ path: '', component: FeatureVideoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureVideoRoutingModule { }
