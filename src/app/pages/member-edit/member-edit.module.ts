import { FormsModule } from '@angular/forms';
import { MemberEditRoutingModule } from './member-edit-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberEditComponent } from './member-edit.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CommonToolModule } from 'src/app/common-tool/common-tool.module';
import { MemberCollectionComponent } from './member-collection/member-collection.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';

@NgModule({
  declarations: [MemberEditComponent, MemberCollectionComponent, MemberProfileComponent],
  imports: [FormsModule, CommonModule, MemberEditRoutingModule, TooltipModule.forRoot(), CommonToolModule],
})
export class MemberEditModule {}
