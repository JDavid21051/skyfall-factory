import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'ngx-table-tag',
  standalone: true,
  imports: [
    NgClass
  ],
  template: `
    <span class="table__tag" [ngClass]="class">
      {{ content }}
    </span>
  `,
  styleUrl: './table-tag.component.scss'
})
export class TableTagComponent {
  @Input() class = '';
  @Input() content = '';
}
