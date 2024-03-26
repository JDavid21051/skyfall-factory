import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgComponentOutlet, NgIf, NgOptimizedImage, NgTemplateOutlet} from '@angular/common';
import {TableButtonTrashComponent} from '../table-icon-trash/table-button-trash.component';
import {TableButtonPenComponent} from '../table-icon-pen/table-button-pen.component';

export enum ButtonTypeEnum {
  'update' = 'update',
  'delete' = 'delete',
}

@Component({
  selector: 'ngx-table-button',
  standalone: true,
  imports: [NgClass, NgIf, TableButtonTrashComponent, TableButtonPenComponent],
  template: `
    <button class="table__btn"
            [ngClass]="{ 'update': isUpdated(), 'delete': isDeleted() }">
      <ngx-icon-pen class="icon" *ngIf="isUpdated()" (click)="clickUpdate.emit()"/>
      <ngx-icon-trash class="icon" *ngIf="isDeleted()" (click)="clickDelete.emit()"/>
    </button>
  `,
  styleUrl: './table-button.component.scss'
})
export class TableButtonComponent {
  @Input() type: ButtonTypeEnum = ButtonTypeEnum.update;
  @Output() clickUpdate = new EventEmitter();
  @Output() clickDelete = new EventEmitter();
  buttonTypeEnum = ButtonTypeEnum;

  isUpdated() {
    return this.type === this.buttonTypeEnum.update;
  }

  isDeleted() {
    return this.type === this.buttonTypeEnum.delete;
  }

}
