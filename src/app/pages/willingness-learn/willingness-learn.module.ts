import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WillingnessLearnRoutingModule } from './willingness-learn-routing.module';
import { WillingnessLearnComponent } from './willingness-learn.component';
import { CommonToolModule } from 'src/app/common-tool/common-tool.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WillingnessLearnComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    CommonToolModule,
    WillingnessLearnRoutingModule,
    BsDropdownModule.forRoot(),
  ]
})
export class WillingnessLearnModule { }
