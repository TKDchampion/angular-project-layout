import { CommonToolModule } from 'src/app/common-tool/common-tool.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsComponent } from './subjects.component';


@NgModule({
  declarations: [
    SubjectsComponent
  ],
  imports: [
    CommonModule,
    CommonToolModule,
    SubjectsRoutingModule
  ]
})
export class SubjectsModule { }
