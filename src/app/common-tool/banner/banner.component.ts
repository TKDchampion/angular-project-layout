import { Component, OnInit } from '@angular/core';
import { EveService } from 'src/app/services/env.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  identity = this.envService.getEnv('identity');
  constructor(private envService: EveService) {}

  ngOnInit(): void {}
}
