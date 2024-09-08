import { Component, Input } from '@angular/core';
import { Credits } from 'src/app/interfaces/game';

@Component({
  selector: 'game-credits',
  templateUrl: './credits.component.html',
})
export class CreditsComponent {
  @Input() credits:Credits | undefined;
}
