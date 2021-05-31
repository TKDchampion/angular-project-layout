import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeItemComponent } from './home-item/home-item.component';

import { StoreModule } from '@ngrx/store';
import { flagReducer } from 'src/app/core/store/flag/flag.reducer';
@NgModule({
  declarations: [HomeComponent, HomeItemComponent],
  imports: [CommonModule, HomeRoutingModule, StoreModule.forRoot({ flag: flagReducer })],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
