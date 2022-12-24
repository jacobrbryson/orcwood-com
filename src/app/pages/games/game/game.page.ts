import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game, GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage {

  game:Game | undefined;
  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ) { 
    const gameKey = this.route.snapshot.paramMap.get('gameKey');
    this.game = this.gameService.getGames().find((game) => game.key == gameKey);
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

}
