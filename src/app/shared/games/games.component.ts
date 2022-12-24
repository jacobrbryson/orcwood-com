import { Component } from '@angular/core';
import { GameService, Game } from 'src/app/services/game.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'shared-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent{
  games: Game[];
  constructor(
    private gameService: GameService, 
    public utilityService: UtilityService
  ){
    this.games = this.gameService.getGames();
  }
}