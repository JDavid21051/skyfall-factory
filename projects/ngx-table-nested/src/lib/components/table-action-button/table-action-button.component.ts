import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';
import {ActionConfigInterface} from '../../interfaces/tree-nested.models';

@Component({
  selector: 'ngx-table-action-button',
  standalone: true,
  imports: [NgIf],
  template: `
    <button *ngIf="data" class="button_link" [title]="data.tooltip" (click)="data.click(data)">
            <span class="material-symbols-outlined">
              {{ data.icon.icon }}
            </span>
    </button>
  `,
  styles: [`
    .button_link {
        border-radius: 4px;
        border: 0;
        padding: 0.2rem;
        margin-right: .5rem;
        cursor: pointer;
        vertical-align: middle;
        background: white;
        display: inline-flex;
        box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, .1) 0 6px 20px;

        & span {
          font-size: 20px !important;
        }
      }
  `]
})
export class TableActionButtonComponent {
  @Input()
  data!: ActionConfigInterface;
}
