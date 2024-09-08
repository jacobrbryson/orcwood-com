import { Component, Input } from '@angular/core';

@Component({
  selector: 'game-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent {
  @Input() html5Url:string | undefined;
}
