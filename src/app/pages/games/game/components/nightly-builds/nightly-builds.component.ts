import { Component, Input } from '@angular/core';
import { NightlyBuild } from 'src/app/interfaces/game';

@Component({
  selector: 'app-nightly-builds',
  templateUrl: './nightly-builds.component.html'
})
export class NightlyBuildsComponent {
  @Input() nightlyBuilds:NightlyBuild[] = [];
}
