import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-section-header',
  templateUrl: './section-header.component.html',
})
export class SectionHeaderComponent {
  @Input() title: string | undefined;
}
