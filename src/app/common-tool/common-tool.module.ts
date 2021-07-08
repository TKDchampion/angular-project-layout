import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewArticleComponent } from './new-article/new-article.component';
import { LearnWillingnessComponent } from './learn-willingness/learn-willingness.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NewArticleComponent, LearnWillingnessComponent],
  imports: [CommonModule, RouterModule],
  exports: [NewArticleComponent, LearnWillingnessComponent],
})
export class CommonToolModule {}
