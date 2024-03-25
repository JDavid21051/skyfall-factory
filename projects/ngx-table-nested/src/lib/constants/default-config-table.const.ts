import {ColumnMode, SortType} from '@swimlane/ngx-datatable';

export const TABLE_COLUMN_ICON_WIDTH = 50;
export const TABLE_ROW_HEIGHT = 35;
export const TABLE_FOOTER_HEIGHT = 28;

export const TABLE_CHILDREN_KEY = 'children';
export const TABLE_CHILDREN_ROW_OFFSET = 110;
export const TABLE_CHILDREN_ROW_HEIGHT = 40;
export const TABLE_LIMIT = 5;

export const DEFAULT_BASIC_CONFIG: Record<'header' | 'footer' | 'row' | 'limit'| 'mode'| 'sort', any> = {
  header: 37,
  footer: TABLE_FOOTER_HEIGHT,
  row: TABLE_ROW_HEIGHT,
  limit: TABLE_LIMIT,
  mode: ColumnMode,
  sort: SortType,
}
