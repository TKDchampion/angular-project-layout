/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AfterViewInit, Component, Inject, InjectionToken, PLATFORM_ID, ViewChildren } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { open, close } from 'src/app/core/store/flag/flag.actions';
import { setValue } from 'src/app/core/store/setValue/set-value.actions';
import Player from '@vimeo/player';
import { isPlatformBrowser } from '@angular/common';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  flag$: Observable<boolean>;
  getdata: Record<string, unknown> | undefined;

  constructor(
    @Inject(PLATFORM_ID) private platformId: InjectionToken<Record<string, unknown>>,
    private store: Store<{ flag: boolean }>,
    private storeValue: Store<{ setValue: { value: string } }>,
    private metaTagService: Meta,
  ) {
    this.flag$ = store.select('flag');
    storeValue.select('setValue').subscribe((resp) => {
      console.log(resp);
      this.getdata = resp;
    });

    this.metaTagService.addTags([
      {
        name: 'keywords test',
        content: 'Angular SEO Integration, Music CRUD, Angular Universal',
      },
    ]);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const player = new Player('handstick', {
        id: 19231868,
        width: 640,
      });
      player.on('play', function () {
        console.log('played the video!');
      });
    }
  }

  open(): void {
    this.store.dispatch(open());
  }

  close(): void {
    this.store.dispatch(close());
  }

  set(): void {
    const radom = Math.random().toString();
    this.storeValue.dispatch(setValue({ value: radom }));
  }
}
