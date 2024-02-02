import {Component, Input} from '@angular/core';
import {ActionConfigInterface, ActionTypeEnum} from '../../interfaces/tree-nested.models';
import {TableActionButtonComponent} from '../atoms/table-action-button/table-action-button.component';
import {TableActionButtonIconComponent} from '../atoms/table-action-button-icon/table-action-button-icon.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'ngx-table-action-factory',
  standalone: true,
  imports: [
    NgIf,
    TableActionButtonComponent,
    TableActionButtonIconComponent
  ],
  template: `
    <ng-container *ngIf="data">
      <ngx-table-button *ngIf="type === actionTypeEnum.button" [data]="data"/>
      <ngx-table-button-icon *ngIf="type === actionTypeEnum.icon" [data]="data"/>
    </ng-container>
  `
})
export class TableActionFactoryComponent {
  @Input()
  type: ActionTypeEnum = ActionTypeEnum.icon;

  @Input()
  data: ActionConfigInterface | undefined = undefined;

  actionTypeEnum = ActionTypeEnum;

}
