import { Component, Input, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Image } from 'src/app/interfaces/game';

@Component({
  selector: 'game-slide-show',
  templateUrl: './slide-show.component.html',
})
export class SlideShowComponent {
  @ViewChild(IonSlides) slides?: IonSlides;
  @Input() images:Image[] = [];

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true
  };

  slidePrev(): void {
    this.slides?.slidePrev();
  }

  slideNext(): void {
    this.slides?.slideNext();
  }
}
