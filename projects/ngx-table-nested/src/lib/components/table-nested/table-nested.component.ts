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
  ActionConfigInterface, ActionTypeEnum,
  TableNestedThemeEnum,
  TreeNestedColumnInterface
} from '../../interfaces/tree-nested.models';
import {TableBasicComponent} from '../table-basic/table-basic.component';
import {TableStyleComponent} from '../atoms/table-style/table-style.component';
import {TableButtonComponent, ButtonTypeEnum} from '../atoms/table-button/table-button.component';
import {TableTagComponent} from '../atoms/table-tag/table-tag.component';

export enum TableCellTypeEnum {
  'text' = 'text',
  'tag' = 'tag',
  'image' = 'image',
  'icon' = 'icon',
}

export interface DataTableNested<T> {
  data: T,
  column: {
    keyValue: string,
    name: string,
    sort?: boolean,
    type: TableCellTypeEnum,
    header: string,
  }
}

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
  // dataTable?: DataTableNested<T>;

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

  @Output()
  clickRow: EventEmitter<number> = new EventEmitter();

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
  readonly buttonTypeEnum = ButtonTypeEnum;

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
    return this.childrenRowOff + (this.tableRowsCount === this.CERO ? this.CERO : (this.childrenRowHeight * this.calcRowCount()));
  }

  calcRowCount() {
    if (this.tableRowsCount === this.CERO) return this.tableRowsCount;
    if (this.tableRowsCount <= TABLE_CHILDREN_LIMIT) return this.tableRowsCount;
    return TABLE_CHILDREN_LIMIT;
  }

  onClickRow(event: number) {
    console.log(event);
  }

}
