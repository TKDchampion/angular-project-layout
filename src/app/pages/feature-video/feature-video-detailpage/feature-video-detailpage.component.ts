import { formatNumber, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, HostListener, Inject, InjectionToken, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Player from '@vimeo/player';
import { NewVideoItemInfoNewArticleModel } from 'src/app/common-tool/new-video/new-video.model';
import { ResizeEvent, ResizeService } from 'src/app/services/resize.service';
import { FeatureVideoItem } from '../feature-video.model';

@Component({
  selector: 'app-feature-video-detailpage',
  templateUrl: './feature-video-detailpage.component.html',
  styleUrls: ['./feature-video-detailpage.component.scss']
})
export class FeatureVideoDetailpageComponent implements OnInit, AfterViewInit {
  autherSetting = {
    title: '作者介紹',
    img: '../../../assets/img/fakeImge/new_video_fake_headshot.png',
    authorName: '林欣蓉 教授',
    authorText:
      '由擁有臺大醫院15年臨床經驗的恬兒職能治療師協助號召、聚集多種兒童發展醫學專業，來提供專業的育兒、教養知識。服務內容包含:專業/親職講座、幼童發展潛能評估、學前發展核心能力培養遊戲課程、學前發展核心能力培養遊戲課程、教具玩具開發。',
  };
  isMobile = false;
  // videoId!: string | null;
  videoRecommendItem = FeatureVideoItem;
  videoDetail: NewVideoItemInfoNewArticleModel | undefined;
  constructor(
    @Inject(PLATFORM_ID) private platformId: InjectionToken<Record<string, unknown>>,
    private resizeService: ResizeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.isMobile = this.detectWindowSize(this.resizeService.default());
    const videoId = this.route.snapshot.paramMap.get('id');
    this.videoDetail = this.videoRecommendItem.find(i => i.id === videoId);
    router.events.subscribe((val: unknown) => {
      const videoId = this.route.snapshot.paramMap.get('id');
      this.videoDetail = this.videoRecommendItem.find(i => i.id === videoId);
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: ResizeEvent): void {
    const size = this.resizeService.detectSize(event.target.innerWidth);
    this.isMobile = this.detectWindowSize(size);
  }

  ngOnInit(): void {
  }
  goBack() {
    this.router.navigate([`/pages/feature-video`]);
  }

  goToType() {
    this.router.navigate([`/pages/feature-video`, '醫務管理']);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // SSR video
      const player = new Player('handstick', {
        width: 928,
        height: 528
      });
      const onPlay = (data: unknown) => {
        console.log(data);
        console.log('pause the video!');
      };
      player.on('pause', onPlay);
      this.setVideoTime(player);
      this.getVideoDuration(player);
      this.getVideoTime(player);
    }
  }

  private setVideoTime(player: Player) {
    player
      .setCurrentTime(0)
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

  private getVideoDuration(player: Player) {
    player
      .getDuration()
      .then(function (duration) {
        // console.log(duration);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  private getVideoTime(player: Player) {
    player
      .getCurrentTime()
      .then(function (seconds) {
        // seconds = the current playback position
        // console.log(seconds);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  private detectWindowSize(size: string): boolean {
    const mobileSize = ['sm', 'xs'];
    return mobileSize.find((i) => i === size) ? true : false;
  }
}
