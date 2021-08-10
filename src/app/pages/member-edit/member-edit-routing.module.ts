import { MemberEditComponent } from './member-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { MemberHistoryComponent } from './member-history/member-history.component';
import { MemberCollectionComponent } from './member-collection/member-collection.component';

const routes: Routes = [
  {
    path: '',
    component: MemberEditComponent,
    children: [
      { path: '', redirectTo: 'member-profile', pathMatch: 'full' },
      { path: 'member-profile', component: MemberProfileComponent },
      { path: 'member-history', component: MemberHistoryComponent },
      { path: 'member-collection', component: MemberCollectionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberEditRoutingModule {}
