import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeItemComponent } from './home-item/home-item.component';
@NgModule({
  declarations: [HomeComponent, HomeItemComponent],
  imports: [CommonModule, HomeRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
