import { Component } from '@angular/core';
import { EveService } from '../services/env.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  identity = this.envService.getEnv('identity');
  constructor(private envService: EveService) {
    console.log('identity', this.envService.getEnv('identity'));
  }
}
