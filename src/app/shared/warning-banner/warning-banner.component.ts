import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-warning-banner',
  templateUrl: './warning-banner.component.html',
  styleUrls: ['./warning-banner.component.scss'],
})
export class WarningBannerComponent {
  @Input() responseType: 'accept' | 'reject' | 'change' | null = null;

  get message(): string {
    switch (this.responseType) {
      case 'accept':
        return 'You have accepted this order line.';
      case 'reject':
        return 'You have rejected this order line.';
      case 'change':
        return 'You are requesting changes to this order line.';
      default:
        return '';
    }
  }

  get bannerClass(): string {
    return this.responseType ? `warning-${this.responseType}` : '';
  }
}
