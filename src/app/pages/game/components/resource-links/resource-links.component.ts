import { Component, Input, OnInit } from '@angular/core';
import { ResourceLink } from 'src/app/interfaces/game';

@Component({
  selector: 'game-resource-links',
  templateUrl: './resource-links.component.html'
})
export class ResourceLinksComponent {
  @Input() resourceLinks:ResourceLink[] = [];
}
