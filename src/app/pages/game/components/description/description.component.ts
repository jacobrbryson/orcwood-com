import { Component, Input } from '@angular/core';

@Component({
  selector: 'game-description',
  templateUrl: './description.component.html'
})
export class DescriptionComponent {
  @Input() description:string = "";
}
