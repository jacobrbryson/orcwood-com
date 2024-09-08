import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Credit, Game } from 'src/app/interfaces/game';
import { Member } from 'src/app/interfaces/member';
import { GameService } from 'src/app/services/game.service';
import { memberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage {
  game:Game | undefined;
  projectManager: Member | undefined;
  contributors: Member[] = [];
  credits:Credit[] = [];

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private memberService: memberService
  ) { 
    const gameKey = this.route.snapshot.paramMap.get('gameKey');
    this.game = this.gameService.getGames().find((game) => game.key == gameKey);
    this.projectManager = this.memberService.getTeam().find((member) => member.key == this.game?.projectManagerKey || "")

    for(const key of this.game?.contributorKeys ?? []){
      let member = this.memberService.getTeam().find((member:Member) => member.key == key);
      if(member) this.contributors.push(member);
    }
  }
}
