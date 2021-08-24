import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegulationsRoutingModule } from './regulations-routing.module';
import { RegulationsComponent } from './regulations.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { StoreModule } from '@ngrx/store';
import * as profileDropReducer from 'src/app/core/store/profileDrap/profileDrop.reducer';



@NgModule({
  declarations: [
    RegulationsComponent,
    AboutusComponent,
    ContactusComponent,
    TermsOfUseComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    RegulationsRoutingModule,
    StoreModule.forFeature(profileDropReducer.clickValueKey, profileDropReducer.profileDropReducer),
  ]
})
export class RegulationsModule { }
