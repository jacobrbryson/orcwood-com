import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'page-games',
  templateUrl: './games.page.html',
})
export class GamesPage implements OnInit {
  constructor(
    private seo: SeoService,
    private gameService: GameService
  ) {}

  ngOnInit(): void {
    const games = this.gameService.getGames();

    this.seo.update({
      title: 'Our Games',
      description:
        'Browse the indie games made by the Orcwood Games collective — from in-development passion projects to released titles you can play today.',
      path: '/games',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Our Games',
        url: 'https://orcwood.com/games',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: games.map((game, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `https://orcwood.com/games/${game.key}`,
            name: game.title,
          })),
        },
      },
    });
  }
}
