import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { open, close } from 'src/app/core/store/flag/flag.actions';
import { setValue } from 'src/app/core/store/setValue/set-value.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  flag$: Observable<boolean>;
  getValue$: Observable<{ value: string }>;

  constructor(private store: Store<{ flag: boolean }>, private storeValue: Store<{ setValue: { value: string } }>) {
    this.flag$ = store.select('flag');
    this.getValue$ = storeValue.select('setValue');
  }

  open(): void {
    this.store.dispatch(open());
  }

  close(): void {
    this.store.dispatch(close());
  }

  set(): void {
    this.storeValue.dispatch(setValue({ value: 'test' }));
  }
}
