import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
})
export class SectionHeaderComponent {
  @Input() title: string | undefined;
  /** Heading level to render. Use "1" for a page's primary heading. */
  @Input() level: '1' | '2' = '2';
}
