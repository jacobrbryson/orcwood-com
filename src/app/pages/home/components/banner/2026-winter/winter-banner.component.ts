import { Component } from '@angular/core';

@Component({
  selector: 'home-winter-2026-banner',
  templateUrl: './winter-banner.component.html',
  styleUrls: ['./winter-banner.component.scss'],
})
export class Winter2026BannerComponent {
  detailsOpen = false;

  openDetails(): void {
    this.detailsOpen = true;
  }

  closeDetails(): void {
    this.detailsOpen = false;
  }
}
