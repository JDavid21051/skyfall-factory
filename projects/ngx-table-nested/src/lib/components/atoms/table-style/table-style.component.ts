import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ngx-table-style',
  standalone: true,
  imports: [],
  encapsulation: ViewEncapsulation.None,
  template: `
    <style>
      .py-2 {
        padding-top: 0.5rem !important;
        padding-bottom: 0.5rem !important;
      }

      .p-3 {
        padding: 1rem !important;
      }

      .bg_white {
        background-color: #fff;
      }

      .table-alert-warning {
        background-color: #fffaeb;
        color: #946c00;
        padding: 1.25rem 2.5rem;
        border-radius: 4px;
        display: inline-grid;
        font-size: 16px;
      }

      .ngx-datatable {
        & .datatable-scroll {
          width: 100% !important;
        }

        & .table__actions_content {
          display: flex;
          gap: 8px;
        }

        & .table__toggle {
          display: grid;
          padding: 4px;
          position: relative;
          background-color: transparent;
          border-radius: 4px;
          border-width: 1px;
          cursor: pointer;
          transition: color .3s, border .3s;
        }

        & .datatable-row-detail {
          display: grid;
          padding: 16px 12px !important;
          background: rgb(54 62 85 / 50%) !important;
        }

        & datatable-footer {
          overflow: hidden !important;
          color: #fff !important;
        }

        &.bootstrap {

          & .table__toggle {
            border-color: #0e0e0e;
            color: #0e0e0e;
          }

          & .datatable-body-cell {
            padding: 2px 0 !important;
            min-height: 1rem;
            max-height: 35px;
            display: flex;
            align-items: center;
            height: 100%;

            &:has(span) {
              padding-left: 16px !important;
            }

            &:has(button) {
              padding-left: 6px !important;
            }
          }
        }

        &.dark {

          & .datatable-header {
            color: #fff !important;
          }

          & .table__toggle {
            border-color: #FDFDFDFF;
            color: #FDFDFDFF;
          }

          & .datatable-body-cell {
            padding: 2px 0 !important;
            min-height: 1rem;
            max-height: 35px;
            display: flex;
            align-items: center;
            height: 100%;

            &:has(span) {
              padding-left: 16px !important;
            }

            &:has(button) {
              padding-left: 6px !important;
            }
          }
        }
      }
    </style>
  `
})
export class TableStyleComponent {}
