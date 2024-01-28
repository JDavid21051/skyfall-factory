import {Component, Input, ViewChild} from '@angular/core';
import {ColumnMode, DatatableComponent, NgxDatatableModule, SortType} from '@swimlane/ngx-datatable';
import {TreeTableColumnInterface} from '../../interface/tree-table-column.interface';
import {
  TABLE_CHILDREN_LIMIT,
  TABLE_COLUMN_ICON_WIDTH,
  TABLE_LIMIT,
  TABLE_ROW_HEIGHT,
  TABLE_CHILDREN_ROW_HEIGHT,
  TABLE_CHILDREN_ROW_OFFSET
} from '../../constants/default-config-table.const';
import {NgFor, NgIf} from '@angular/common';
import {SpinnerComponent} from '../orp-spineer/orp-spinner.component';
import {TreeTableBasicComponent} from '../orp-tree-table-basic/orp-tree-table-basic.component';

@Component({
  selector: 'orp-tree-table-collapse',
  standalone: true,
  imports: [NgIf, NgFor, NgxDatatableModule, TreeTableBasicComponent, SpinnerComponent],
  templateUrl: './orp-tree-table-collapse.component.html'
})
export class TreeTableCollapseComponent<T> {
  @ViewChild('treeTable') table!: DatatableComponent;

  @Input()
  dataTable: T[] = [];

  @Input()
  columns: TreeTableColumnInterface[] = [];

  @Input()
  childrenColumns: TreeTableColumnInterface[] = [];

  @Input()
  childrenKey = '';

  @Input()
  childrenLimit= TABLE_CHILDREN_LIMIT;

  @Input()
  limit = TABLE_LIMIT;

  columnMode = ColumnMode;
  sortType = SortType;
  childrenTableLength = 3;
  currentRowExpanded: any;

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

  readonly iconColumnWidth = TABLE_COLUMN_ICON_WIDTH;
  readonly tableRowHeight = TABLE_ROW_HEIGHT;
  readonly childrenRowHeight = TABLE_CHILDREN_ROW_HEIGHT;
  readonly childrenRowOff = TABLE_CHILDREN_ROW_OFFSET;


  getDetailHeight() {
    return this.childrenRowOff + (this.childrenRowHeight * this.calcHeight());
  }

  calcHeight() {
    const result = Math.floor(this.childrenTableLength / this.childrenLimit);
    return this.childrenTableLength > 0 ? (result > 2 ? result : this.childrenLimit) : 1;
  }
}
