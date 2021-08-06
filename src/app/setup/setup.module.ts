import { FormsModule } from '@angular/forms';
import { SetupComponent } from './setup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from './setup-routing.module';
import { CommonToolModule } from '../common-tool/common-tool.module';
import { EveService } from '../services/env.service';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { SetLineBindComponent } from './set-line-bind/set-line-bind.component';


@NgModule({
  declarations: [SetupComponent, SetNewPasswordComponent, SetLineBindComponent],
  imports: [
    FormsModule,
    CommonModule,
    SetupRoutingModule,
    CommonToolModule
  ],
  providers: [EveService],
})
export class SetupModule { }
