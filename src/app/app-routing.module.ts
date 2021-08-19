import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'setup',
    loadChildren: () => import('./setup/setup.module').then((m) => m.SetupModule),
  },
  { path: 'subjects', loadChildren: () => import('./pages/subjects/subjects.module').then(m => m.SubjectsModule) },
  { path: 'willingness-learn', loadChildren: () => import('./pages/willingness-learn/willingness-learn.module').then(m => m.WillingnessLearnModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
