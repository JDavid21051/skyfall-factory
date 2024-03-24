import {ButtonTypeEnum} from '../components';

export enum ActionTypeEnum {
  'icon' = 'icon',
  'tag' = 'tag',
  'text' = 'text'
}

export enum TableNestedThemeEnum {
  'light' = 'light',
  'dark' = 'dark'
}

export interface TreeNestedColumnInterface {
  keyValue: string,
  name: string,
  sort?: boolean,
  type: ActionTypeEnum,
}

export interface ActionConfigInterface {
  label: string,
  icon: {
    icon: string,
    pack: string
  },
  type: ButtonTypeEnum,
  tooltip: string,
  click: Function
}

export interface TbNestedDataInterface {
  children:  any
}

export interface TbNestedConfigInterface {
  column: TreeNestedColumnInterface[],
  limit: number,
  action: ActionConfigInterface[]
}

export interface TbNestedConfigChildrenCInterface extends TbNestedConfigInterface {
  key: string;
}

export interface TableNestedInterface<T extends TbNestedDataInterface> {
  dataTable: T[],
  fatherConfig: TbNestedConfigInterface,
  childrenConfig: TbNestedConfigChildrenCInterface,
  theme: TableNestedThemeEnum,
}
