import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game, GameService } from 'src/app/services/game.service';
import { Member, TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage {

  game:Game | undefined;
  projectManager: Member | undefined;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private teamService: TeamService
  ) { 
    const gameKey = this.route.snapshot.paramMap.get('gameKey');
    this.game = this.gameService.getGames().find((game) => game.key == gameKey);
    console.log( this.game?.projectManager);
    this.projectManager = this.teamService.getTeam().find((member) => member.key == this.game?.projectManager || "")
    console.log(this.teamService.getTeam())
    console.log(this.projectManager)
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

}
