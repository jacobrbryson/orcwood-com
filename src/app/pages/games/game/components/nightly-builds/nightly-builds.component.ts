import { Component, Input, OnInit } from '@angular/core';
import { NightlyBuild } from 'src/app/services/game.service';

@Component({
  selector: 'app-nightly-builds',
  templateUrl: './nightly-builds.component.html'
})
export class NightlyBuildsComponent {
  @Input() nightlyBuilds:NightlyBuild[] = [];
}
