import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureDownloadComponent } from './feature-download.component';

const routes: Routes = [{ path: '', component: FeatureDownloadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureDownloadRoutingModule { }
