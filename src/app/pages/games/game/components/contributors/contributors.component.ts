import { Component, Input } from '@angular/core';
import { Member } from 'src/app/services/team.service';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
})
export class ContributorsComponent {
  @Input() contributors?:Member[] = [];
}
