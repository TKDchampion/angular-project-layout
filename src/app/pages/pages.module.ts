import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { StoreModule } from '@ngrx/store';
import { CommonToolModule } from '../common/common-tool.module';
@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, PagesRoutingModule, StoreModule.forRoot({}), CommonToolModule],
})
export class PagesModule {}
