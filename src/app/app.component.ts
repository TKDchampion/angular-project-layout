import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {
    console.log(environment);
  }

  ngOnInit(): void {
    console.log(document.cookie);
  }

  title = 'dksh';
}
