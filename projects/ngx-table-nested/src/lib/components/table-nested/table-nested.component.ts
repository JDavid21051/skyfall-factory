import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
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
  TableActionColumnModel, ContentTypeColumnEnum,
  TableThemeEnum,
  TableColumnModel,
  ActionTypeEnum
} from '../../models/nested.models';
import {TableBasicComponent} from '../table-basic/table-basic.component';
import {TableStyleComponent} from '../table-style/table-style.component';
import {TableButtonComponent, TableTagComponent} from '../atoms';

@Component({
  selector: 'ngx-table-nested',
  standalone: true,
  imports: [NgForOf, NgIf, NgClass, NgxDatatableModule, TableBasicComponent, TableStyleComponent, TableButtonComponent, TableTagComponent],
  templateUrl: './table-nested.component.html',
  styleUrls: ['./table-nested.component.scss']
})
export class TableNestedComponent<T> {
  @ViewChild('treeTable') table!: DatatableComponent;

  @Input()
  dataTable: T[] = [];

  @Input()
  columns: TableColumnModel[] = [];

  @Input()
  childrenColumns: TableColumnModel[] = [];

  @Input()
  childrenKey = '';

  @Input()
  childrenLimit = TABLE_CHILDREN_LIMIT;

  @Input()
  limit = TABLE_LIMIT;

  @Input()
  theme: TableThemeEnum = TableThemeEnum.light;

  @Input()
  actionConfig: TableActionColumnModel[] = [];

  @Input()
  childrenActionConfig: TableActionColumnModel[] = [];

  @Output()
  clickRow: EventEmitter<any> = new EventEmitter();

  @Output()
  clickRowChild: EventEmitter<any> = new EventEmitter();

  columnMode = ColumnMode;
  sortType = SortType;
  tableTheme = TableThemeEnum;
  actionType = ContentTypeColumnEnum;

  tableRowsCount = TABLE_CHILDREN_LIMIT;
  tableRowExpanded: any;

  iconColumnWidth = TABLE_COLUMN_ICON_WIDTH;
  rowHeight = TABLE_ROW_HEIGHT;
  footerHeight = TABLE_FOOTER_HEIGHT;

  childrenRowHeight = TABLE_CHILDREN_ROW_HEIGHT;
  childrenRowOff = TABLE_CHILDREN_ROW_OFFSET;

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
    const zero = 0;
    return this.childrenRowOff + (this.tableRowsCount === zero ? zero : (this.childrenRowHeight * this.calcRowCount()));
  }

  calcRowCount() {
    const zero = 0;
    if (this.tableRowsCount === zero) return this.tableRowsCount;
    if (this.tableRowsCount <= TABLE_CHILDREN_LIMIT) return this.tableRowsCount;
    return TABLE_CHILDREN_LIMIT;
  }

  onClickRow(event: ActionTypeEnum, event2: number) {
    console.log(event, event2);
  }

}
