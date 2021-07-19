/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export class ResizeService {
  default() {
    return this.detectSize(document.getElementsByTagName('body')[0].offsetWidth);
  }
  detectSize(width: number): string {
    switch (!!width) {
      case 0 < width && width < 576:
        return 'xs';
      case 575 < width && width < 768:
        return 'sm';
      case 767 < width && width < 992:
        return 'md';
      case 991 < width && width < 1200:
        return 'lg';
      case 1199 < width && width < 1400:
        return 'xl';
      case 1399 < width:
        return 'xxl';
    }

    return 'xxl';
  }
}

export interface ResizeEvent {
  target: { innerWidth: number };
}
