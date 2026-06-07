import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.page.html',
})
export class PageNotFoundPage implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Page Not Found',
      description: 'The page you were looking for could not be found.',
      noindex: true,
    });
  }
}
