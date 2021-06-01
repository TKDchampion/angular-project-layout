import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { StoreModule } from '@ngrx/store';
@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, PagesRoutingModule, StoreModule.forRoot({})],
})
export class PagesModule {}
