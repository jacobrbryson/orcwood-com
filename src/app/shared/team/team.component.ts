import { Component } from '@angular/core';
import { Member } from 'src/app/interfaces/member';
import { memberService } from 'src/app/services/member.service';

@Component({
  selector: 'shared-team',
  templateUrl: './team.component.html',
})
export class TeamComponent {
  team:Member[];

  constructor(private memberService: memberService){
    this.team = this.memberService.getTeam();
  }
}