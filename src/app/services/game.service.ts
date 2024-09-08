import { Injectable } from '@angular/core';
import data from 'src/assets/data/games.json';
import { Game } from '../interfaces/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  games: Game[] = JSON.parse(JSON.stringify(data));

  getGames():Game[]{
    return this.games;
  }
}