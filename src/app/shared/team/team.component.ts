import { Component } from '@angular/core';
import { TeamService, Member } from 'src/app/services/team.service';

@Component({
  selector: 'shared-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  team:Member[];

  constructor(private teamService: TeamService){
    this.team = this.teamService.getTeam();
  }
}