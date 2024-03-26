/*
 * Project:      skyfall-factory
 * Developed by: Juan David Pelaez Cumbe
 * Date:         25/03/24 - 11:20
 * Module name:  utils.const
 * File name:    utils.const.ts
 * IDE:          WebStorm
 */


import {ContentTypeColumnEnum} from '../models';

export const isViewText = (type: ContentTypeColumnEnum) => {
  return type === ContentTypeColumnEnum.text;
};

export const isViewImage = (type: ContentTypeColumnEnum) => {
  return type === ContentTypeColumnEnum.image;
};

export const isViewTag = (type: ContentTypeColumnEnum) => {
  return type === ContentTypeColumnEnum.tag;
};

export const isViewIcon = (type: ContentTypeColumnEnum) => {
  return type === ContentTypeColumnEnum.icon;
};
