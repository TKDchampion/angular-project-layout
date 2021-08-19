import { Component, Input } from '@angular/core';
import { EveService } from 'src/app/services/env.service';

@Component({
  selector: 'app-scope-title',
  templateUrl: './scope-title.component.html',
  styleUrls: ['./scope-title.component.scss'],
})
export class ScopeTitleComponent {
  @Input() title!: string;
  @Input() showMoreBtn = true;
  @Input() showTag = true;
  @Input() customClass: string | undefined;
  tag: string | undefined;
  tags = [
    { id: 1, text: '登入後即可瀏覽內容' },
    { id: 2, text: '驗證後即可解鎖專業性醫學內容' },
  ];
  identity = this.envService.getEnv('identity');
  constructor(private envService: EveService) {
    this.tag = this.tags.find((i) => i.id === this.identity)?.text;
  }
}
