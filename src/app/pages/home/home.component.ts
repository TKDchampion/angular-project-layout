/* eslint-disable @typescript-eslint/no-explicit-any */
import { AfterViewInit, Component, HostListener, Inject, InjectionToken, PLATFORM_ID, ViewChild } from '@angular/core';
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
import { HotSubjectItemInfo, LearnWillingness, NewActiveItemInfo, NewArticle, NewArticle2, NewVideoItem, VideoRecommendItem } from './home.model';
import { EveService } from 'src/app/services/env.service';
import { HotSubjectItemInfoNewArticleModel } from 'src/app/common-tool/hot-subject/hot-subject.model';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('swiperRef1', { static: false }) swiperRef1: any;
  @ViewChild('swiperRef2', { static: false }) swiperRef2: any;
  @ViewChild('swiperRef3', { static: false }) swiperRef3: any;

  @HostListener('window:resize', ['$event'])
  onResize(event: ResizeEvent): void {
    const size = this.resizeService.detectSize(event.target.innerWidth);
    this.showNewVideoIndex = this.detectNewVideoIndex(size);
    this.newVideoColumn = this.detectNewVideoColumn(size);
    this.renderingHotSubjet(size);
    console.log('this.newVideoColumn :>> ', this.newVideoColumn);

    this.setSwiperTransformStylele(0, 'swiperRef1');
    this.setSwiperTransformStylele(0, 'swiperRef1');
    this.setSwiperTransformStylele(0, 'swiperRef1');
  }
  flag$: Observable<boolean>;
  getdata: Record<string, unknown> | undefined;
  showNewVideoIndex: number | undefined;
  newVideoColumn = 4;
  showHotSubjectCounts: number | undefined;
  resizeObservable$: Observable<Event> | undefined;
  resizeSubscription$: Subscription | undefined;
  swiperSlideTransform: any = {
    swiperRef1: 0,
    swiperRef2: 0,
    swiperRef3: 0,
  };
  hotSubjectArray: HotSubjectItemInfoNewArticleModel[] = [];

  // fake data
  // newArticle = NewArticle;
  newArticle1 = NewArticle;
  newArticle2 = NewArticle2;
  learnWillingness = LearnWillingness;
  newVideoItem = NewVideoItem;
  videoRecommendItem = VideoRecommendItem;
  hotSubjectItemInfo = HotSubjectItemInfo;
  newActiveItemInfo = NewActiveItemInfo;
  identity = this.envService.getEnv('identity');

  constructor(
    @Inject(PLATFORM_ID) private platformId: InjectionToken<Record<string, unknown>>,
    private store: Store<{ flag: boolean }>,
    private storeValue: Store<{ setValue: { value: string } }>,
    private metaTagService: Meta,
    private resizeService: ResizeService,
    private changeDetectorRef: ChangeDetectorRef,
    private envService: EveService,
  ) {
    const size = this.resizeService.default();
    this.showNewVideoIndex = this.detectNewVideoIndex(size);
    this.newVideoColumn = this.detectNewVideoColumn(size);
    this.renderingHotSubjet(size);
    console.log('this.newVideoColumn :>> ', this.newVideoColumn);

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
    this.setSwiperTransformStylele(this.swiperSlideTransform.swiperRef1, 'swiperRef1');
    this.setSwiperTransformStylele(this.swiperSlideTransform.swiperRef2, 'swiperRef2');
    this.setSwiperTransformStylele(this.swiperSlideTransform.swiperRef3, 'swiperRef3');
  }

  onSlideChange(event: unknown, elIndex: string): void {
    const index = (event as { realIndex: number }).realIndex;
    this.swiperSlideTransform[elIndex] = index * -325;
    this.setSwiperTransformStylele(this.swiperSlideTransform[elIndex], elIndex);
    this.changeDetectorRef.detectChanges();
    console.log('this.swiperRef1 :>> ', this.swiperRef1.swiperRef);
  }

  prev(elIndex: string): void {
    this.swiperSlideTransform[elIndex] = this.swiperSlideTransform[elIndex] + 325;
    this.setSwiperTransformStylele(this.swiperSlideTransform[elIndex], elIndex);
  }

  next(elIndex: string): void {
    this.swiperSlideTransform[elIndex] = this.swiperSlideTransform[elIndex] - 325;
    this.setSwiperTransformStylele(this.swiperSlideTransform[elIndex], elIndex);
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

  private setSwiperTransformStylele(swiperSlideTransform: number, elIndex: string) {
    let wrapper: HTMLElement | undefined;
    switch (!!elIndex) {
      case elIndex === 'swiperRef1':
        wrapper = this.swiperRef1?.swiperRef.$wrapperEl[0];
        break;
      case elIndex === 'swiperRef2':
        wrapper = this.swiperRef2?.swiperRef.$wrapperEl[0];
        break;
      case elIndex === 'swiperRef3':
        wrapper = this.swiperRef3?.swiperRef.$wrapperEl[0];
        break;
    }
    if (wrapper) {
      wrapper.style.transform = `translate3d(${swiperSlideTransform}px, 0px, 0px)`;
      wrapper.style.transitionDuration = '300ms';
    }
  }
  private renderingHotSubjet(size: string) {
    this.showHotSubjectCounts = this.detectHotSubjectCounts(size);
    const array = [];
    for (let i = 0; i < this.showHotSubjectCounts; i++) {
      array.push(this.hotSubjectItemInfo);
    }
    this.hotSubjectArray = array;
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

  private detectNewVideoColumn(size: string): number {
    switch (!!size) {
      case size === 'xs':
        return 1;
      case size === 'sm':
      case size === 'md':
        return 2;
      case size === 'lg':
      case size === 'xl':
        return 3;
      case size === 'xxl':
        return 4;
      default:
        return 4;
    }
  }

  private detectHotSubjectCounts(size: string): number {
    switch (!!size) {
      case size === 'xs':
      case size === 'sm':
      case size === 'md':
        return 2;
      case size === 'lg':
        return 3;
      case size === 'xl':
      case size === 'xxl':
        return 4;
      default:
        return 4;
    }
  }
  // xs:0 | sm:576px | md:768px | lg:992px | xl:1200px | xxl:1366px

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
