import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';
import {ActionConfigInterface} from '../../../interfaces/tree-nested.models';

@Component({
  selector: 'ngx-table-button',
  standalone: true,
  imports: [NgIf],
  template: `
    <button *ngIf="data" class="button_link" [title]="data.tooltip" (click)="data.click(data)">
      {{ data.label }}
      <span class="material-symbols-outlined">
          {{ data.icon.icon }}
        </span>
    </button>
  `,
  styleUrls: ['../../styles.scss']
})
export class TableActionButtonComponent {
  @Input()
  data: ActionConfigInterface | undefined = undefined;
}
