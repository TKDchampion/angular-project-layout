import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
// import * as setValueReducer from 'src/app/core/store/setValue/set-value.reducer';
import { StoreModule } from '@ngrx/store';
@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    StoreModule.forRoot({}),
    //  StoreModule.forFeature(setValueReducer.setValueKey, setValueReducer.setValueReducer)
  ],
})
export class PagesModule {}
