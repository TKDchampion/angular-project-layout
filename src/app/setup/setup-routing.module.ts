import { SetNewPasswordModule } from './set-new-password/set-new-password.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetupComponent } from './setup.component';

const routes: Routes = [
  {
    path: '',
    component: SetupComponent,
    children: [
      {
        path: 'newpassword',
        loadChildren: () => import('./set-new-password/set-new-password.module').then((m) => m.SetNewPasswordModule),
      },
      {
        path: 'line',
        loadChildren:() => import('./set-line-bind/set-line-bind.module').then((m) => m.SetLineBindModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
