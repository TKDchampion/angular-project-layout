import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewArticleComponent } from './new-article/new-article.component';

@NgModule({
  declarations: [NewArticleComponent],
  imports: [CommonModule],
  exports: [NewArticleComponent],
})
export class CommonToolModule {}
