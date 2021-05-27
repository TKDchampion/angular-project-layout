import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { EnvServiceProvider } from '../core/services/env.sercive';

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, PagesRoutingModule],
  providers: [EnvServiceProvider],
})
export class PagesModule {}
