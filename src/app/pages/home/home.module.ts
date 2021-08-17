import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeItemComponent } from './home-item/home-item.component';

import { StoreModule } from '@ngrx/store';
import * as flagReducer from 'src/app/core/store/flag/flag.reducer';
import * as setValueReducer from 'src/app/core/store/setValue/set-value.reducer';
import { CommonToolModule } from 'src/app/common-tool/common-tool.module';
import { SwiperModule } from 'swiper/angular';
import { ResizeService } from 'src/app/services/resize.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, HomeItemComponent],
  imports: [
    RouterModule,
    CommonModule,
    CommonToolModule,
    HomeRoutingModule,
    SwiperModule,
    StoreModule.forFeature(flagReducer.flagKey, flagReducer.flagReducer),
    StoreModule.forFeature(setValueReducer.setValueKey, setValueReducer.setValueReducer),
  ],
  providers: [ResizeService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
