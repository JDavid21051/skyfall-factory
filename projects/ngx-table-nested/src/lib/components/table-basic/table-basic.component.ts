import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
  ActionConfigInterface,
  ActionTypeEnum,
  TableNestedThemeEnum,
  TreeNestedColumnInterface
} from '../../interfaces/tree-nested.models';
import {ColumnMode, NgxDatatableModule, SortType} from '@swimlane/ngx-datatable';
import {NgFor, NgIf, NgClass} from '@angular/common';
import {TableButtonComponent} from '../atoms/table-button/table-button.component';

@Component({
  selector: 'ngx-table-basic',
  standalone: true,
  imports: [NgIf, NgClass, NgFor, NgxDatatableModule, TableButtonComponent],
  template: `
    <ngx-datatable *ngIf="rows.length > 0 else noData"
                   rowHeight="auto"
                   [ngClass]="{
                     'dark': theme === tableTheme.dark,
                     'bootstrap': theme === tableTheme.light,
                     'bg_white': theme === tableTheme.light,
                   }"
                   [rows]="rows"
                   [columnMode]="columnMode"
                   [headerHeight]="30"
                   [footerHeight]="28"
                   [scrollbarV]="false"
                   [sortType]="sortType"
                   [limit]="limit"
    >
      <ng-container *ngFor="let item  of columns">
        <ngx-datatable-column [name]="item.name" [prop]="item.keyValue" [resizeable]="false" [flexGrow]="1"
                              [sortable]="!!item.sort"
                              headerClass="py-2 children_header"
                              cellClass="py-2 children_row">
          <ng-template let-column="column" ngx-datatable-header-template>
            <strong>{{ column.name }}</strong>
          </ng-template>
          <ng-template let-dataItem="row" ngx-datatable-cell-template>
            <span> {{ dataItem[item.keyValue] }}</span>
          </ng-template>
        </ngx-datatable-column>
      </ng-container>
      <ngx-datatable-column *ngIf="actionConfig.length > 0" name="'Acciones'" prop="Acciones"
                            [resizeable]="false" [flexGrow]="1"
                            [sortable]="false"
                            headerClass="py-2 children_header"
                            cellClass="py-2 children_row">
        <ng-template ngx-datatable-header-template>
          <span> Acciones</span>
        </ng-template>
        <ng-template let-dataItem="row" ngx-datatable-cell-template>
                    <span class="table__actions_content">
            <ngx-table-button *ngFor="let action of actionConfig" [type]="action.type"
                              (clickButton)="clickRow.emit($event)"/>
          </span>
        </ng-template>
      </ngx-datatable-column>
    </ngx-datatable>
    <ng-template #noData>
      <div class="table-alert-warning">
        No se encontraron datos para mostrar
      </div>
    </ng-template>
  `
})
export class TableBasicComponent<T> {
  @Input()
  rows: T[] = [];

  @Input()
  columns: TreeNestedColumnInterface[] = [];

  @Input()
  limit = 3;

  @Input()
  theme: TableNestedThemeEnum = TableNestedThemeEnum.light;

  @Input()
  actionConfig: ActionConfigInterface[] = [];

  @Input()
  sortType: SortType = SortType.single;

  @Input()
  columnMode: ColumnMode = ColumnMode.force;

  @Output()
  clickRow: EventEmitter<number> = new EventEmitter();

  tableTheme = TableNestedThemeEnum;
}
