import { AfterViewInit, Component, HostListener, Inject, InjectionToken, OnInit, PLATFORM_ID } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { open, close } from 'src/app/core/store/flag/flag.actions';
import { setValue } from 'src/app/core/store/setValue/set-value.actions';
import Player from '@vimeo/player';
import { isPlatformBrowser } from '@angular/common';
import { Meta } from '@angular/platform-browser';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper/core';
import { ResizeEvent, ResizeService } from 'src/app/services/resize.service';
import { ChangeDetectorRef } from '@angular/core';
import { HotSubjectItemInfo, LearnWillingness, NewActiveItemInfo, NewArticle, NewVideoItem } from './home.model';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit, OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: ResizeEvent): void {
    const size = this.resizeService.detectSize(event.target.innerWidth);
    this.showNewVideoIndex = this.detectNewVideoIndex(size);
    this.setSwiperTransformStylele(0, 0);
  }
  flag$: Observable<boolean>;
  getdata: Record<string, unknown> | undefined;
  showNewVideoIndex: number | undefined;
  resizeObservable$: Observable<Event> | undefined;
  resizeSubscription$: Subscription | undefined;
  swiperSlideTransform = 0;
  hotSubjectArray: unknown[] = [];

  // fake data
  newArticle = NewArticle;
  learnWillingness = LearnWillingness;
  newVideoItem = NewVideoItem;
  hotSubjectItemInfo = HotSubjectItemInfo;
  newActiveItemInfo = NewActiveItemInfo;

  constructor(
    @Inject(PLATFORM_ID) private platformId: InjectionToken<Record<string, unknown>>,
    private store: Store<{ flag: boolean }>,
    private storeValue: Store<{ setValue: { value: string } }>,
    private metaTagService: Meta,
    private resizeService: ResizeService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    const size = this.resizeService.default();
    this.showNewVideoIndex = this.detectNewVideoIndex(size);

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

  ngOnInit(): void {
    for (let i = 0; i < 4; i++) {
      this.hotSubjectArray.push(this.hotSubjectItemInfo);
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // SSR video
      // const player = new Player('handstick', {
      //   width: 640,
      // });
      // const onPlay = (data: unknown) => {
      //   console.log(data);
      //   console.log('pause the video!');
      // };
      // player.on('pause', onPlay);
      // this.setVideoTime(player);
      // this.getVideoDuration(player);
      // this.getVideoTime(player);
    }
    this.setSwiperTransformStylele(this.swiperSlideTransform, 0);
    this.setSwiperTransformStylele(this.swiperSlideTransform, 1);
  }

  onSlideChange(event: unknown, elIndex: number): void {
    const index = (event as { realIndex: number }).realIndex;
    this.swiperSlideTransform = index * -328;
    this.setSwiperTransformStylele(this.swiperSlideTransform, elIndex);
    this.changeDetectorRef.detectChanges();
    console.log(this.swiperSlideTransform);
  }

  prev(elIndex: number): void {
    this.swiperSlideTransform = this.swiperSlideTransform + 328;
    this.setSwiperTransformStylele(this.swiperSlideTransform, elIndex);
  }

  next(elIndex: number): void {
    this.swiperSlideTransform = this.swiperSlideTransform - 328;
    this.setSwiperTransformStylele(this.swiperSlideTransform, elIndex);
  }

  private getVideoTime(player: Player) {
    player
      .getCurrentTime()
      .then(function (seconds) {
        // seconds = the current playback position
        console.log(seconds);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  private getVideoDuration(player: Player) {
    player
      .getDuration()
      .then(function (duration) {
        console.log(duration);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  private setSwiperTransformStylele(swiperSlideTransform: number, elIndex: number) {
    const wrapper = document.getElementsByClassName('swiper-wrapper')[elIndex] as HTMLElement;
    if (wrapper) {
      wrapper.style.transform = `translate3d(${swiperSlideTransform}px, 0px, 0px)`;
      wrapper.style.transitionDuration = '300ms';
    }
  }

  private setVideoTime(player: Player) {
    player
      .setCurrentTime(30.456)
      .then(function (seconds) {
        console.log(seconds);
      })
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
          default:
            // some other error occurred
            break;
        }
      });
  }

  private detectNewVideoIndex(size: string): number {
    switch (!!size) {
      case size === 'xs':
        return 7;
      case size === 'sm':
      case size === 'md':
        return 6;
      case size === 'lg':
      case size === 'xl':
        return 5;
      case size === 'xxl':
        return 4;
      default:
        return 4;
    }
  }
  // xs:0 | sm:576px | md:768px | lg:992px | xl:1200px | xxl:1400px

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
