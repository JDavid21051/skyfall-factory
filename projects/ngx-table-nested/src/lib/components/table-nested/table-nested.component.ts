import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {DatatableComponent, NgxDatatableModule} from '@swimlane/ngx-datatable';
import {
  TABLE_LIMIT,
  TABLE_COLUMN_ICON_WIDTH,
  TABLE_CHILDREN_ROW_HEIGHT,
  TABLE_CHILDREN_ROW_OFFSET,
  DEFAULT_BASIC_CONFIG,
  TABLE_CHILDREN_KEY
} from '../../constants';
import {
  TableThemeEnum,
  TableEventRowClick,
  TableConfigModel,
  TableExtraConfigModel
} from '../../models';
import {TableButtonComponent, TableTagComponent} from '../atoms';

import {TableBasicComponent} from '../table-basic/table-basic.component';
import {TableStyleComponent} from '../table-style/table-style.component';
import {TableColumnViewComponent} from '../atoms/table-column-view/table-column-view.component';

@Component({
  selector: 'ngx-table-nested',
  standalone: true,
  imports: [NgForOf, NgIf, NgClass, NgxDatatableModule, TableBasicComponent, TableStyleComponent, TableButtonComponent, TableTagComponent, TableColumnViewComponent],
  templateUrl: './table-nested.component.html',
  styleUrls: ['./table-nested.component.scss']
})
export class TableNestedComponent {
  @ViewChild('tableNested') table!: DatatableComponent;
  readonly defaultConfig = DEFAULT_BASIC_CONFIG;

  @Input({required: true}) dataTable?: TableConfigModel;

  @Input({required: false}) limit = this.defaultConfig.limit;

  @Input({required: false}) theme: TableThemeEnum = TableThemeEnum.light;

  @Output() onRowClick: EventEmitter<TableEventRowClick> = new EventEmitter();

  @Output() onRowClickChildren: EventEmitter<TableEventRowClick> = new EventEmitter();

  tableRowsCount = this.defaultConfig.limit;
  tableRowExpanded: any;
  iconColumnWidth = TABLE_COLUMN_ICON_WIDTH;
  childrenRowHeight = TABLE_CHILDREN_ROW_HEIGHT;
  childrenRowOff = TABLE_CHILDREN_ROW_OFFSET;

  getChildrenKey() {
    const data = this.dataTable;
    if (data && data.children && data.children && data.children.field) return data.children.field;
    return TABLE_CHILDREN_KEY;
  }

  getTableTheme() {
    return {
      'dark': this.theme === TableThemeEnum.dark,
      'bootstrap': this.theme === TableThemeEnum.light
    };
  }

  getChildrenExtraConfig() {
    if (this.dataTable && this.dataTable.children && this.dataTable.children.extra) return this.dataTable.children.extra;
    return <TableExtraConfigModel>{
      actions: {
        data: [],
        header: ''
      }
    };
  }

  getDetailHeight() {
    const zero = 0;
    return this.childrenRowOff + (this.tableRowsCount === zero ? zero : (this.childrenRowHeight * this.calcRowCount()));
  }

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

    this.tableRowsCount = row[this.getChildrenKey()].length;
  }

  calcRowCount() {
    const zero = 0;
    if (this.tableRowsCount === zero) return this.tableRowsCount;
    if (this.tableRowsCount <= TABLE_LIMIT) return this.tableRowsCount;
    return TABLE_LIMIT;
  }
}
