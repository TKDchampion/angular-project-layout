import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureActiveComponent } from './feature-active.component';

const routes: Routes = [{ path: '', component: FeatureActiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureActiveRoutingModule {}
