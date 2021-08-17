import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WillingnessLearnComponent } from './willingness-learn.component';

const routes: Routes = [{ path: '', component: WillingnessLearnComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WillingnessLearnRoutingModule { }
