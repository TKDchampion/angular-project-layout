import { CommonToolModule } from 'src/app/common-tool/common-tool.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsComponent } from './subjects.component';
import { SubjectsItemComponent } from './subjects-item/subjects-item.component';


@NgModule({
  declarations: [
    SubjectsComponent,
    SubjectsItemComponent
  ],
  imports: [
    CommonModule,
    CommonToolModule,
    SubjectsRoutingModule
  ]
})
export class SubjectsModule { }
