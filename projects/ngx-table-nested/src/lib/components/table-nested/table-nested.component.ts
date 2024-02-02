import {Component, Input, ViewChild} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {ColumnMode, DatatableComponent, NgxDatatableModule, SortType} from '@swimlane/ngx-datatable';
import {
  TABLE_CHILDREN_LIMIT,
  TABLE_LIMIT,
  TABLE_COLUMN_ICON_WIDTH,
  TABLE_ROW_HEIGHT,
  TABLE_CHILDREN_ROW_HEIGHT,
  TABLE_CHILDREN_ROW_OFFSET, TABLE_FOOTER_HEIGHT
} from '../../constants/default-config-table.const';
import {
  ActionConfigInterface, ActionTypeEnum,
  TableNestedThemeEnum,
  TreeNestedColumnInterface
} from '../../interfaces/tree-nested.models';
import {TableBasicComponent} from '../table-basic/table-basic.component';
import {TableActionButtonComponent} from '../table-action-button/table-action-button.component';
import {TableActionFactoryComponent} from '../table-action-factory/table-action-factory.component';

@Component({
  selector: 'ngx-table-nested',
  standalone: true,
  imports: [NgForOf, NgIf, NgClass, NgxDatatableModule, TableBasicComponent, TableActionButtonComponent, TableActionFactoryComponent],
  templateUrl: './table-nested.component.html',
  styleUrls: ['../styles.scss' ]
})
export class TableNestedComponent<T> {
  @ViewChild('treeTable') table!: DatatableComponent;

  @Input()
  dataTable: T[] = [];

  @Input()
  columns: TreeNestedColumnInterface[] = [];

  @Input()
  childrenColumns: TreeNestedColumnInterface[] = [];

  @Input()
  childrenKey = '';

  @Input()
  childrenLimit = TABLE_CHILDREN_LIMIT;

  @Input()
  limit = TABLE_LIMIT;

  @Input()
  theme: TableNestedThemeEnum = TableNestedThemeEnum.light;

  @Input()
  actionConfig: ActionConfigInterface[] = [];

  @Input()
  childrenActionConfig: ActionConfigInterface[] = [];

  columnMode = ColumnMode;
  sortType = SortType;
  tableTheme = TableNestedThemeEnum;
  actionType = ActionTypeEnum;

  tableRowsCount = TABLE_CHILDREN_LIMIT;
  tableRowExpanded: any;

  iconColumnWidth = TABLE_COLUMN_ICON_WIDTH;
  tableRowHeight = TABLE_ROW_HEIGHT;
  tableFooterHeight = TABLE_FOOTER_HEIGHT;
  childrenRowHeight = TABLE_CHILDREN_ROW_HEIGHT;
  childrenRowOff = TABLE_CHILDREN_ROW_OFFSET;
  CERO = 0;

  toggleExpandRow(row: any) {
    if (this.tableRowExpanded) {
      this.table.rowDetail.toggleExpandRow(this.tableRowExpanded);
    }

    if (this.tableRowExpanded !== row) {
      this.table.rowDetail.toggleExpandRow(row);
      this.tableRowExpanded = row;
    } else {
      this.tableRowExpanded = undefined;
    }

    this.tableRowsCount = row[this.childrenKey].length;
  }

  getDetailHeight() {
    return this.childrenRowOff + (this.tableRowsCount === this.CERO ? this.CERO : (this.childrenRowHeight * this.calcRowCount()))
  }

  calcRowCount() {
    if (this.tableRowsCount === this.CERO) return this.tableRowsCount;
    if (this.tableRowsCount <= TABLE_CHILDREN_LIMIT) return this.tableRowsCount;
    return TABLE_CHILDREN_LIMIT
  }

}
