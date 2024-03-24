import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
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
      <ngx-icon-pen class="icon" *ngIf="isUpdated()" (click)="clickButton.emit(0)"/>
      <ngx-icon-trash class="icon" *ngIf="isDeleted()" (click)="clickButton.emit(1)"/>
    </button>
  `,
  styleUrl: './table-button.component.scss'
})
export class TableButtonComponent {
  @Input() type: ButtonTypeEnum = ButtonTypeEnum.update;
  @Output() clickButton: EventEmitter<number> = new EventEmitter();
  buttonTypeEnum = ButtonTypeEnum;

  isUpdated() {
    return this.type === this.buttonTypeEnum.update;
  }

  isDeleted() {
    return this.type === this.buttonTypeEnum.delete;
  }

}
