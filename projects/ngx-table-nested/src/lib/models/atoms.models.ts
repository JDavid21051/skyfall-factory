/*
 * Project:      skyfall-factory
 * Developed by: Juan David Pelaez Cumbe
 * Date:         24/03/24 - 11:28
 * Module name:  atoms.models.ts
 * File name:    atoms.models.ts
 * IDE:          WebStorm
 */

export interface TableTagConfigProp {
  text?: string;
  class?: string;
}

export interface TableImageConfig {
  alternativeText?: string;
  noImageText?: string;
}

export interface TableTagConfigModel {
  active?: TableTagConfigProp;
  inactive?: TableTagConfigProp;
}
