export enum ActionTypeEnum {
  'icon' = 'icon',
  'button' = 'button',
  'span' = 'span'
}

export enum TableNestedThemeEnum {
  'light' = 'light',
  'dark' = 'dark'
}

export interface TreeNestedColumnInterface {
  keyValue: string,
  name: string,
  sort?: boolean
}

export interface ActionConfigInterface {
  type: ActionTypeEnum,
  label: string,
  icon: {
    icon: string,
    pack: string
  },
  tooltip: string,
  click: Function
}


export interface TreeNestedDataInterface<T> {
  dataTable: T[],
  columns: TreeNestedColumnInterface[],
  childrenColumns: TreeNestedColumnInterface[],
  childrenKey: string,
  childrenLimit: number;
  limit: number,
  theme: TableNestedThemeEnum,
  actionConfig: ActionConfigInterface[]
}
