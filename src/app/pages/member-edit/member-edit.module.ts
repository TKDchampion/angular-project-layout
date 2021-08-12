import { FormsModule } from '@angular/forms';
import { MemberEditRoutingModule } from './member-edit-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberEditComponent } from './member-edit.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonToolModule } from 'src/app/common-tool/common-tool.module';
import { MemberCollectionComponent } from './member-collection/member-collection.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { MemberHistoryComponent } from './member-history/member-history.component';
import { StoreModule } from '@ngrx/store';
import * as profileDropReducer from 'src/app/core/store/profileDrap/profileDrop.reducer';

@NgModule({
  declarations: [MemberEditComponent, MemberCollectionComponent, MemberProfileComponent, MemberHistoryComponent],
  imports: [
    FormsModule,
    CommonModule,
    MemberEditRoutingModule,
    TooltipModule.forRoot(),
    CommonToolModule,
    StoreModule.forFeature(profileDropReducer.clickValueKey, profileDropReducer.profileDropReducer),
    BsDropdownModule.forRoot(),
  ],
})
export class MemberEditModule {}
