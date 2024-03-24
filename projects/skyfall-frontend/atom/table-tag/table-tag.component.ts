import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'ngx-table-tag',
  standalone: true,
  imports: [
    NgClass
  ],
  template: `
    <span class="tag" [ngClass]="{'active': active, 'inactive': !active }">
      {{ active ? 'activo' : 'inactive' }}
    </span>
  `,
  styleUrl: './table-tag.component.scss'
})
export class TableTagComponent {
  @Input() active = false;
}
