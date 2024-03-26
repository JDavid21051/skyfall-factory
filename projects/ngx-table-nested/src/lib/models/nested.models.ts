import {ColumnMode, SortType} from '@swimlane/ngx-datatable';

/**
 * Column type support
 */
export enum ContentTypeColumnEnum {
  'icon' = 'icon',
  'tag' = 'tag',
  'text' = 'text',
  'image' = 'image'
}

/**
 * Action type support
 */
export enum ActionTypeEnum {
  'update' = 'update',
  'delete' = 'delete'
}

/**
 * theme app support
 */
export enum TableThemeEnum {
  'light' = 'light',
  'dark' = 'dark'
}

export interface TableEventRowClick<T =  any> {
  type: ActionTypeEnum;
  row: T;
}

export interface TableColumnModel {
  field: string;
  header: string;
  sort?: boolean;
  resize?: boolean;
  grow?: number;
  type: ContentTypeColumnEnum;
}

export interface TableIconActionColumnModel {
  icon?: string;
  class?: string;
}

export interface TableActionColumnModel {
  label: string;
  icon?: TableIconActionColumnModel;
  type: ActionTypeEnum;
  tooltip: string;
  click?: Function;
}

export interface TableActioneConfigModel {
  data: TableActionColumnModel[];
  header: string;
}

export interface TableMessageConfigModel {
  empty?: string;
  error?: string;
}

export interface TableExtraConfigModel {
  actions: TableActioneConfigModel;
  messages?: TableMessageConfigModel;
  sortType?: SortType;
  columnMode?: ColumnMode;
}

export interface TableChildrenConfigModel {
  field?: string;
  columns: TableColumnModel[];
  extra?: TableExtraConfigModel;
  limit?: number;
}

export interface TableConfigModel<T = any[]> {
  data: T;
  columns: TableColumnModel[];
  extra?: TableExtraConfigModel;
  children?: TableChildrenConfigModel;
}
