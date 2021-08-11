export interface TabListModel {
  name: string;
  active: boolean;
}

export interface VideoModel {
  time: string;
  headUrl: string;
  headShotUrl: string;
  title: string;
  text: string;
  people: string;
  read: string;
  date: string;
}

interface ArticleModel {
  headUrl: string;
  headShotUrl: string;
  title: string;
  text: string;
  people: string;
  read: string;
  date: string;
}

export const NewVideoItem: VideoModel[] = [
  {
    date: '今天',
    time: '32:24',
    headUrl: '../../../assets/img/fakeImge/new_video_fake_img.png',
    headShotUrl: '../../../assets/img/fakeImge/new_video_fake_headshot.png',
    title: '從小實施衛教的重要性',
    read: '4,567 已觀看',
    people: '歐朔銘 醫師',
    text: '對某醫學中心11個加護病房的護理師問卷調查，以了解同時靜脈給多種藥的型態與風險。',
  },
  {
    date: '2020/6/28',
    time: '32:24',
    headUrl: '../../../assets/img/fakeImge/newvideo_2.png',
    headShotUrl: '../../../assets/img/fakeImge/new_video_fake_headshot_2.png',
    title: '為什麼流感會致命？',
    read: '3,567 已觀看',
    people: '林美麗 醫師',
    text: '對某醫學中心11個加護病房的護理師問卷調查，以了解同時靜脈給多種藥的型態與風險。',
  },
  {
    date: '2020/6/28',
    time: '32:24',
    headUrl: '../../../assets/img/fakeImge/newvideo_3.png',
    headShotUrl: '../../../assets/img/fakeImge/new_video_fake_headshot.png',
    title: '教你如何分辨醫療口罩',
    read: '2,567 已觀看',
    people: '王彩華 醫師',
    text: '對某醫學中心11個加護病房的護理師問卷調查，以了解同時靜脈給多種藥的型態與風險。',
  },
  {
    date: '2020/6/27',
    time: '32:24',
    headUrl: '../../../assets/img/fakeImge/newvideo_4.png',
    headShotUrl: '../../../assets/img/fakeImge/new_video_fake_headshot_3.png',
    title: '防曬，從小做起',
    read: '2,567 已觀看',
    people: '歐朔銘 醫師',
    text: '對某醫學中心11個加護病房的護理師問卷調查，以了解同時靜脈給多種藥的型態與風險。',
  },
  {
    date: '2020/6/27',
    time: '32:24',
    headUrl: '../../../assets/img/fakeImge/new_video_fake_img.png',
    headShotUrl: '../../../assets/img/fakeImge/new_video_fake_headshot.png',
    title: '從小實施衛教的重要性',
    read: '4,567 已觀看',
    people: '歐朔銘 醫師',
    text: '對某醫學中心11個加護病房的護理師問卷調查，以了解同時靜脈給多種藥的型態與風險。',
  },
  {
    date: '2020/6/27',
    time: '32:24',
    headUrl: '../../../assets/img/fakeImge/newvideo_2.png',
    headShotUrl: '../../../assets/img/fakeImge/new_video_fake_headshot_2.png',
    title: '為什麼流感會致命？',
    read: '3,567 已觀看',
    people: '林美麗 醫師',
    text: '對某醫學中心11個加護病房的護理師問卷調查，以了解同時靜脈給多種藥的型態與風險。',
  },
];

export const NewArticle: ArticleModel[] = [
  {
    headUrl: '../../../assets/img/fakeImge/new_article_1.png',
    title: '加護病房靜脈同時給予多種藥品之型態與風險',
    text: '對某醫學中心11個加護病房的護理師問券調查，以了解同時竟賣給多種藥的型態與風險。',
    people: '黃織芬 教授',
    headShotUrl: '../../../assets/img/fakeImge/new_article_headshot_1.png',
    read: '1,567 已閱讀',
    date: '2021/05/11',
  },
  {
    headUrl: '../../../assets/img/fakeImge/new_article_2.png',
    title: '甲狀腺癌術後放射碘清除治療及全身掃描',
    text: '本研究目的為探討甲狀腺癌術後病人採低碘飲食的持續時間對尿碘濃度之影響。',
    people: '黃織芬 教授',
    headShotUrl: '../../../assets/img/fakeImge/header_fake_headshot.png',
    read: '1,567 已閱讀',
    date: '2021/05/11',
  },
];
