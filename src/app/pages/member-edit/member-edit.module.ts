import { MemberEditRoutingModule } from './member-edit-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberEditComponent } from './member-edit.component';

@NgModule({
  declarations: [MemberEditComponent],
  imports: [CommonModule, MemberEditRoutingModule],
})
export class MemberEditModule {}
