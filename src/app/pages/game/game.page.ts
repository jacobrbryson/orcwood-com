import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Credits, Game, ResourceLink } from 'src/app/interfaces/game';
import { Member } from 'src/app/interfaces/member';
import { CreditService } from 'src/app/services/credit.service';
import { GameService } from 'src/app/services/game.service';
import { MemberService } from 'src/app/services/member.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
})
export class GamePage implements OnInit {
  game: Game | undefined;
  projectManager: Member | undefined;
  contributors: Member[] = [];
  credits: Credits | undefined;
  resourceLinks: ResourceLink[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService,
    private memberService: MemberService,
    private creditsService: CreditService,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    const gameKey = this.route.snapshot.paramMap.get('gameKey');
    this.game = this.gameService.getGames().find((game) => game.key == gameKey);

    if (!this.game) {
      // Unknown game key: render the not-found view and keep it out of the index.
      this.router.navigate(['/404'], { skipLocationChange: true });
      return;
    }

    this.projectManager = this.memberService
      .getTeam()
      .find((member) => member.key == this.game?.projectManagerKey || '');
    this.resourceLinks =
      this.game?.resourceLinks?.filter((resourceLink) => !resourceLink.admin) ??
      [];

    for (const key of this.game?.contributorKeys ?? []) {
      let member = this.memberService
        .getTeam()
        .find((member: Member) => member.key == key);
      if (member) this.contributors.push(member);
    }

    this.credits = this.creditsService.getCredits(gameKey ?? '');

    this.setSeo(this.game);
  }

  private setSeo(game: Game): void {
    const image = game.image ? `/assets/${game.image}` : undefined;

    this.seo.update({
      title: game.title,
      description:
        game.description?.slice(0, 300) ||
        `${game.title}, a game by the Orcwood Games collective.`,
      path: `/games/${game.key}`,
      image,
      type: 'article',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'VideoGame',
        name: game.title,
        description: game.description,
        url: `https://orcwood.com/games/${game.key}`,
        ...(image ? { image: `https://orcwood.com${image}` } : {}),
        ...(game.releaseDate ? { datePublished: game.releaseDate } : {}),
        publisher: {
          '@type': 'Organization',
          name: 'Orcwood Games',
          url: 'https://orcwood.com/',
        },
      },
    });
  }
}
