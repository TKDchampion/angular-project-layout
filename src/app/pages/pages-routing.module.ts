import { FeatureVideoComponent } from './feature-video/feature-video.component';
import { FeatureVideoDetailpageComponent } from './feature-video/feature-video-detailpage/feature-video-detailpage.component';
import { SubjectsItemComponent } from './subjects/subjects-item/subjects-item.component';
import { HomeItemComponent } from './home/home-item/home-item.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { FeatureArticleDetailpageComponent } from './feature-article/feature-article-detailpage/feature-article-detailpage.component';
import { FeatureDownloadDetailpageComponent } from './feature-download/feature-download-detailpage/feature-download-detailpage.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'home/:id',
        component: HomeItemComponent,
      },
      {
        path: 'member-edit',
        loadChildren: () => import('./member-edit/member-edit.module').then((m) => m.MemberEditModule),
      },
      {
        path: 'subject',
        loadChildren: () => import('./subjects/subjects.module').then((m) => m.SubjectsModule)
      },
      {
        path: 'subject/:subject',
        component: SubjectsItemComponent,
      },
      {
        path: 'feature-article',
        loadChildren: () => import('./feature-article/feature-article.module').then((m) => m.FeatureArticleModule),
      },
      {
        path: 'feature-article/:id',
        component: FeatureArticleDetailpageComponent,
      },
      {
        path: 'feature-video',
        loadChildren: () => import('./feature-video/feature-video.module').then((m) => m.FeatureVideoModule),
      },
      {
        path: 'feature-video/:type',
        component: FeatureVideoComponent,
      },
      {
        path: 'feature-video/:type/:id',
        component: FeatureVideoDetailpageComponent,
      },
      {
        path: 'willingness-learn',
        loadChildren: () => import('./willingness-learn/willingness-learn.module').then((m) => m.WillingnessLearnModule),
      },
      {
        path: 'feature-download',
        loadChildren: () => import('./feature-download/feature-download.module').then((m) => m.FeatureDownloadModule)
      },
      {
        path: 'feature-download/:id',
        component: FeatureDownloadDetailpageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
