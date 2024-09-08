import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/interfaces/game';

@Component({
  selector: 'game-slide-show',
  templateUrl: './slide-show.component.html',
})
export class SlideShowComponent {
  @Input() images:Image[] = [];

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
}
