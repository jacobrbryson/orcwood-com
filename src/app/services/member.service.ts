import { Injectable } from '@angular/core';
import data from 'src/assets/data/members.json';
import { Member } from '../interfaces/member';

@Injectable({
  providedIn: 'root'
})
export class memberService {
  constructor() { }

  team: Member[] = data;

  getTeam():Member[]{
    return this.team;
  }
}