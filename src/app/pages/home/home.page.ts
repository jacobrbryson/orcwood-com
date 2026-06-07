import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Orcwood Games',
      description:
        'Orcwood Games is a collective of hobbyist developers, artists, and designers building original indie games together in their spare time. Explore our games and meet the team.',
      path: '/',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': 'https://orcwood.com/#organization',
            name: 'Orcwood Games',
            url: 'https://orcwood.com/',
            logo: 'https://orcwood.com/assets/logo-og-games.png',
            description:
              'A collective of hobbyist developers, artists, and designers building original indie games together.',
          },
          {
            '@type': 'WebSite',
            '@id': 'https://orcwood.com/#website',
            url: 'https://orcwood.com/',
            name: 'Orcwood Games',
            publisher: { '@id': 'https://orcwood.com/#organization' },
          },
        ],
      },
    });
  }
}
