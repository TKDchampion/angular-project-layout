import { PrivacyComponent } from './privacy/privacy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegulationsComponent } from './regulations.component';

const routes: Routes = [
  {
    path: '',
    component: RegulationsComponent,
    children: [
      { path: '', redirectTo: 'aboutus', pathMatch: 'full' },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'contactus', component: ContactusComponent },
      { path: 'terms-of-use', component: TermsOfUseComponent },
      { path: 'privacy', component: PrivacyComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegulationsRoutingModule { }
