import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewArticleComponent } from './new-article/new-article.component';
import { LearnWillingnessComponent } from './learn-willingness/learn-willingness.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewVideoComponent } from './new-video/new-video.component';
import { HotSubjectComponent } from './hot-subject/hot-subject.component';

@NgModule({
  declarations: [NewArticleComponent, LearnWillingnessComponent, NavBarComponent, NewVideoComponent, HotSubjectComponent],
  imports: [CommonModule, RouterModule, BsDropdownModule.forRoot()],
  exports: [NewArticleComponent, LearnWillingnessComponent, NavBarComponent, NewVideoComponent, HotSubjectComponent],
})
export class CommonToolModule {}
