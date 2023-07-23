import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-separator',
  templateUrl: './section-separator.component.html',
  styleUrls: ['./section-separator.component.scss'],
})
export default class SectionSeparatorComponent {
  @Input() section: string;
}
