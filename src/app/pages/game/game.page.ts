import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Credits, Game } from 'src/app/interfaces/game';
import { Member } from 'src/app/interfaces/member';
import { CreditService } from 'src/app/services/credit.service';
import { GameService } from 'src/app/services/game.service';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
})
export class GamePage {
  game:Game | undefined;
  projectManager: Member | undefined;
  contributors: Member[] = [];
  credits:Credits | undefined;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private memberService: MemberService,
    private creditsService: CreditService
  ) { 
    const gameKey = this.route.snapshot.paramMap.get('gameKey');
    this.game = this.gameService.getGames().find((game) => game.key == gameKey);
    this.projectManager = this.memberService.getTeam().find((member) => member.key == this.game?.projectManagerKey || "")

    for(const key of this.game?.contributorKeys ?? []){
      let member = this.memberService.getTeam().find((member:Member) => member.key == key);
      if(member) this.contributors.push(member);
    }

    this.credits = this.creditsService.getCredits(gameKey ?? '');

  }
}
