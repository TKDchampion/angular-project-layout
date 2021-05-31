import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { open, close } from 'src/app/core/store/flag/flag.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  flag$: Observable<boolean>;

  constructor(private store: Store<{ flag: boolean }>) {
    this.flag$ = store.select('flag');
  }

  open(): void {
    this.store.dispatch(open());
  }

  close(): void {
    this.store.dispatch(close());
  }
}
