import {Component, Input} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {TableButtonTrashComponent} from '../table-icon-trash/table-button-trash.component';
import {TableButtonPenComponent} from '../table-icon-pen/table-button-pen.component';
import {ActionTypeEnum} from '../../../models';

@Component({
  selector: 'ngx-table-button',
  standalone: true,
  imports: [NgClass, NgIf, TableButtonTrashComponent, TableButtonPenComponent],
  template: `
    <button class="table__btn"
            [ngClass]="{ 'update': isUpdated, 'delete': isDeleted }">
      <ngx-icon-pen class="icon ngx-icon-pen" *ngIf="isUpdated"/>
      <ngx-icon-trash class="icon ngx-icon-trash" *ngIf="isDeleted"/>
    </button>
  `,
  styleUrl: './table-button.component.scss'
})
export class TableButtonComponent {
  @Input() type: ActionTypeEnum = ActionTypeEnum.update;
  actionType = ActionTypeEnum;

  get isUpdated(): boolean {
    return this.type === this.actionType.update;
  }

  get isDeleted(): boolean {
    return this.type === this.actionType.delete;
  }

}
