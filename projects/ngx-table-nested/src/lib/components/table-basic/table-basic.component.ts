import {Component, Input} from '@angular/core';
import {ActionConfigInterface, TreeNestedColumnInterface} from '../../interfaces/tree-nested.models';
import {ColumnMode, NgxDatatableModule, SortType} from '@swimlane/ngx-datatable';
import {NgFor, NgIf} from '@angular/common';
import {TableActionButtonComponent} from '../table-action-button/table-action-button.component';

@Component({
  selector: 'ngx-table-basic',
  standalone: true,
  imports: [NgIf, NgFor, NgxDatatableModule, TableActionButtonComponent],
  template: `
    <ngx-datatable *ngIf="rows.length > 0 else noData" class="bootstrap"
                   rowHeight="auto"
                   [rows]="rows"
                   [columnMode]="columnMode"
                   [headerHeight]="30"
                   [footerHeight]="30"
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
          <ng-container *ngFor="let action of actionConfig">
            <ngx-table-action-button [data]="action" />
          </ng-container>
        </ng-template>
      </ngx-datatable-column>
    </ngx-datatable>
    <ng-template #noData>
      No se encontraron datos
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
  actionConfig: ActionConfigInterface[] = [];

  @Input()
  sortType: SortType = SortType.single;

  @Input()
  columnMode: ColumnMode = ColumnMode.force;

}
