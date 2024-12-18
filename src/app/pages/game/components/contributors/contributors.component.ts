import { Component, Input } from '@angular/core';
import { Member } from 'src/app/interfaces/member';

@Component({
  selector: 'game-contributors',
  templateUrl: './contributors.component.html',
})
export class ContributorsComponent {
  @Input() contributors?:Member[] = [];
}
