import { Component, Input } from '@angular/core';
import { Member } from 'src/app/interfaces/member';

@Component({
  selector: 'game-project-manager',
  templateUrl: './project-manager.component.html'
})
export class ProjectManagerComponent {
  @Input() projectManager:Member | undefined;
}
