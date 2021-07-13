import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewArticleComponent } from './new-article/new-article.component';
import { LearnWillingnessComponent } from './learn-willingness/learn-willingness.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [NewArticleComponent, LearnWillingnessComponent, NavBarComponent],
  imports: [CommonModule, RouterModule, BsDropdownModule.forRoot(), CollapseModule.forRoot()],
  exports: [NewArticleComponent, LearnWillingnessComponent, NavBarComponent],
})
export class CommonToolModule {}
