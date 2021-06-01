import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setValue } from 'src/app/core/store/setValue/set-value.actions';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  getValue$: Observable<{ value: string }>;
  constructor(private storeValue: Store<{ setValue: { value: string } }>) {
    this.getValue$ = storeValue.select('setValue');
  }
  set(): void {
    this.storeValue.dispatch(setValue({ value: 'test' }));
  }
}
