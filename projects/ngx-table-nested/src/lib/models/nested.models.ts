export enum ContentTypeColumnEnum {
  'icon' = 'icon',
  'tag' = 'tag',
  'text' = 'text',
  'image' = 'image',
}

export enum ActionTypeEnum {
  'update' = 'update',
  'delete' = 'delete',
}

export enum TableThemeEnum {
  'light' = 'light',
  'dark' = 'dark'
}

export interface TableColumnModel {
  field: string,
  header: string,
  sort?: boolean,
  resize?: boolean,
  grow?: number,
  type: ContentTypeColumnEnum,
}

export interface TableActionColumnModel {
  label: string,
  icon: {
    icon: string,
    class: string
  },
  type: ActionTypeEnum,
  tooltip: string,
  click: Function
}



// TODO: pending for test
export interface TableChildrenSafeModel<T = any> {
  children:  T
}

export interface TbNestedConfigInterface {
  column: TableColumnModel[],
  limit: number,
}

export interface TbNestedConfigChildrenCInterface extends TbNestedConfigInterface {
  key: string;
}

export interface TableConfigModel<T extends TableChildrenSafeModel> {
  data: T,
  columns: TableColumnModel[],
  childrenColumns: TableColumnModel[],
  extra?: {
    actions: {
      data: TableActionColumnModel[],
      header: string
    },
  },
  theme?: TableThemeEnum
}
