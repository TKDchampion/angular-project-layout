import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeDetectorRef, Component, HostListener, Input, ViewChild } from '@angular/core';
import { NewVideoItem } from 'src/app/pages/home/home.model';
import { ResizeEvent, ResizeService } from 'src/app/services/resize.service';
import { NewActiveItemInfo, NewArticle } from './swiper.model';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent implements OnInit {
  @Input() type!: 'article' | 'active' | 'video';
  @ViewChild('swiperRef1', { static: false }) swiperRef1: any;
  @HostListener('window:resize', ['$event'])
  onResize(event: ResizeEvent): void {
    this.size = this.resizeService.detectSize(event.target.innerWidth);
    this.swiperSlideCounts = {
      swiperRef1: this.detectSwiperCounts(this.size, this.swiperItems.length),
    };
    this.swiperColumn = this.detectNewVideoColumn(this.size);
    this.setSwiperTransformStylele(0, 'swiperRef1');
  }

  swiperSlideTransform: any = {
    swiperRef1: 0,
  };
  size = 'xxl';
  swiperSlideCounts: any = {
    swiperRef1: 8,
  };
  swiperItems: any[] = [];
  swiperColumn = 3;
  swiperRef = 'swiperRef1';

  constructor(private resizeService: ResizeService, private changeDetectorRef: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void {
    switch (!!this.type) {
      case this.type === 'article':
        this.swiperItems = NewArticle;
        break;
      case this.type === 'active':
        this.swiperItems = NewActiveItemInfo;
        break;
      case this.type === 'video':
        this.swiperItems = NewVideoItem;
        break;
    }
    this.size = this.resizeService.default();
    this.swiperSlideCounts = {
      swiperRef1: this.detectSwiperCounts(this.size, this.swiperItems.length),
    };
    this.swiperColumn = this.detectNewVideoColumn(this.size);
    this.setSwiperTransformStylele(this.swiperSlideTransform.swiperRef1, 'swiperRef1');
  }

  prev(elIndex: string): void {
    this.swiperSlideTransform[elIndex] = this.swiperSlideTransform[elIndex] + 310;
    this.setSwiperTransformStylele(this.swiperSlideTransform[elIndex], elIndex);
  }

  next(elIndex: string): void {
    this.swiperSlideTransform[elIndex] = this.swiperSlideTransform[elIndex] - 310;
    this.setSwiperTransformStylele(this.swiperSlideTransform[elIndex], elIndex);
  }

  onSlideChange(event: unknown, elIndex: string): void {
    const index = (event as { realIndex: number }).realIndex;
    this.swiperSlideTransform[elIndex] = index * -310;
    this.setSwiperTransformStylele(this.swiperSlideTransform[elIndex], elIndex);
    this.changeDetectorRef.detectChanges();
  }

  clickItem(type: string, item: Record<string, unknown>): void {
    this.router.navigate([`/pages/feature-${type}`, item.id]);
  }

  private setSwiperTransformStylele(swiperSlideTransform: number, elIndex: string) {
    let wrapper: HTMLElement | undefined;
    switch (!!elIndex) {
      case elIndex === 'swiperRef1':
        wrapper = this.swiperRef1?.swiperRef.$wrapperEl[0];
        break;
    }
    if (wrapper) {
      wrapper.style.transform = `translate3d(${swiperSlideTransform}px, 0px, 0px)`;
      wrapper.style.transitionDuration = '300ms';
    }
  }

  private detectSwiperCounts(size: string, allCounts: number): number {
    let sizeCounts = 3;
    switch (!!size) {
      case size === 'xs':
        sizeCounts = 1;
        break;
      case size === 'sm':
      case size === 'md':
        sizeCounts = 2;
        break;
      case size === 'lg':
      case size === 'xl':
      case size === 'xxl':
        sizeCounts = 3;
        break;
    }
    return allCounts - sizeCounts < 0 ? 0 : allCounts - sizeCounts;
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
      case size === 'xxl':
        return 3;
      default:
        return 3;
    }
  }
}
