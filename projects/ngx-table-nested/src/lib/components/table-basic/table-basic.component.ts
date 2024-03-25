import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableThemeEnum, TableEventRowClick, TableConfigModel} from '../../models';
import {ColumnMode, NgxDatatableModule, SortType} from '@swimlane/ngx-datatable';
import {NgFor, NgIf, NgClass} from '@angular/common';
import {TableButtonComponent, TableTagComponent} from '../atoms';
import {DEFAULT_BASIC_CONFIG} from '../../constants';
import {TableColumnViewComponent} from '../atoms/table-column-view/table-column-view.component';

@Component({
  selector: 'ngx-table-basic',
  standalone: true,
  imports: [NgIf, NgClass, NgFor, NgxDatatableModule, TableButtonComponent, TableTagComponent, TableColumnViewComponent],
  templateUrl: './table-basic.component.html'
})
export class TableBasicComponent {
  readonly sortType = SortType.single;
  readonly columnMode = ColumnMode.flex;
  readonly defaultConfig = DEFAULT_BASIC_CONFIG;

  @Input() dataTable?: TableConfigModel;

  @Input() limit = this.defaultConfig.limit;

  @Input() theme: TableThemeEnum = TableThemeEnum.light;

  @Output() onRowClick: EventEmitter<TableEventRowClick> = new EventEmitter();

  get isDark() {
    return this.theme === TableThemeEnum.dark;
  }

  get isLight() {
    return this.theme === TableThemeEnum.light;
  }
}
