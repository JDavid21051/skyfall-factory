import {Component, Input, ViewChild} from '@angular/core';
import {CommonModule, NgForOf, NgIf} from '@angular/common';
import {ColumnMode, DatatableComponent, NgxDatatableModule, SortType} from '@swimlane/ngx-datatable';
import {
  TABLE_CHILDREN_LIMIT,
  TABLE_LIMIT,
  TABLE_COLUMN_ICON_WIDTH,
  TABLE_ROW_HEIGHT,
  TABLE_CHILDREN_ROW_HEIGHT,
  TABLE_CHILDREN_ROW_OFFSET
} from '../../constants/default-config-table.const';
import {
  ActionConfigInterface,
  TableNestedThemeEnum,
  TreeNestedColumnInterface
} from '../../interfaces/tree-nested.models';
import {TableSpinnerComponent} from '../table-spinner/table-spinner.component';
import {TableBasicComponent} from '../table-basic/table-basic.component';

@Component({
  selector: 'ngx-table-nested',
  standalone: true,
  imports: [CommonModule, NgForOf, NgIf, NgxDatatableModule, TableSpinnerComponent, TableBasicComponent],
  templateUrl: './table-nested.component.html'
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
  withActions= false;

  tableTheme = TableNestedThemeEnum;
  columnMode = ColumnMode;
  sortType = SortType;
  childrenTableLength = 3;
  currentRowExpanded: any;

  iconColumnWidth = TABLE_COLUMN_ICON_WIDTH;
  tableRowHeight = TABLE_ROW_HEIGHT;
  childrenRowHeight = TABLE_CHILDREN_ROW_HEIGHT;
  childrenRowOff = TABLE_CHILDREN_ROW_OFFSET;


  toggleExpandRow(row: any) {
    if (this.currentRowExpanded) {
      this.table.rowDetail.toggleExpandRow(this.currentRowExpanded);
    }

    if (this.currentRowExpanded !== row) {
      this.table.rowDetail.toggleExpandRow(row);
      this.currentRowExpanded = row;
    } else {
      this.currentRowExpanded = undefined;
    }

    this.childrenTableLength = row[this.childrenKey].length;
  }

  getDetailHeight() {
    return this.childrenRowOff + (this.childrenRowHeight * this.calcHeight());
  }

  calcHeight() {
    const result = Math.floor(this.childrenTableLength / this.childrenLimit);
    return this.childrenTableLength > 0 ? (result > 2 ? result : this.childrenLimit) : 1;
  }

}