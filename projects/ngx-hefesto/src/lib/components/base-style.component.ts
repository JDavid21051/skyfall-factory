/*
 * Project:      skyfall-factory
 * Developed by: Juan David Pelaez Cumbe
 * Date:         31/01/24 - 12:33
 * Module name:  base-style.scss
 * File name:    base-style.scss.ts
 * IDE:          WebStorm
 */
import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'base-style',
  standalone: true,
  imports: [],
  templateUrl: ``,
  styles: [`
     :host {
      .ngx-datatable {
        &.dark {
          .op_button_icon:hover {
            box-shadow: #eeeeee 0 0 8px -2px, transparent 0 0 0 0;
          }
        }
        &.bootstrap {
          .op_button_icon:hover {
            box-shadow: #121212 0 0 8px -2px, transparent 0 0 0 0;
          }
        }
      }

      .ngx-datatable .datatable-body .datatable-row-detail {
        padding: 1rem;
      }

      .ngx-datatable .datatable-footer {
        overflow-y: hidden !important;
      }

      .ngx-datatable.dark .datatable-body .datatable-body-row .datatable-body-cell,
      .ngx-datatable.bootstrap .datatable-body .datatable-body-row .datatable-body-cell {
        padding-top: 8px;
        padding-bottom: 8px;

        &.icon_content_cell {
          display: grid !important;
          place-content: center !important;
          padding: 0 !important;
        }

        &.no-p {
          padding-top: 0;
          padding-bottom: 0;
        }
      }
      .ngx-datatable.dark .datatable-header .datatable-header-cell,
      .ngx-datatable.bootstrap .datatable-header .datatable-header-cell {
        &.children_header {
          padding-top: 8px;
          padding-bottom: 8px;
          background: #d9d9d9;
        }
        &.children_row {
          padding-top: 8px;
          padding-bottom: 8px;
        }
      }
    }

    .py-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }

    .op_button_icon {
      align-items: center;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, .1) 0 6px 20px;
      box-sizing: border-box;
      color: #121212;
      cursor: pointer;
      display: inline-flex;
      font-size: 1.2rem;
      font-weight: 700;
      justify-content: center;
      line-height: 1;
      margin: 0;
      outline: none;
      padding: 0.3rem;
      text-decoration: none;
      transition: box-shadow .2s, -webkit-box-shadow .2s;
      white-space: nowrap;
      border: 0;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }

    .button_link {
      border-radius: 4px;
      border: 0;
      padding: 0.2rem 0.4rem;
      margin-right: .5rem;
      cursor: pointer;
    }

  `],
  encapsulation: ViewEncapsulation.None
})
export class BaseStyleComponent {
}
