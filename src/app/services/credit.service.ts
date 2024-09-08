import { Injectable } from '@angular/core';
import data from 'src/assets/data/credits.json';
import { Credits } from '../interfaces/game';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  getCredits(gameKey:string):Credits | undefined{
    return data.find((creditData) => creditData.gameKey == gameKey);
  }
}