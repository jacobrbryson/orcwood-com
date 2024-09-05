import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
})
export class SectionHeaderComponent {
  @Input() title: string | undefined;
}
