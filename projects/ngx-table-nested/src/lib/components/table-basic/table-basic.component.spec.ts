/**
 *
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TableBasicComponent} from './table-basic.component';
import {NgClass, NgFor, NgIf} from '@angular/common';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {TableButtonComponent, TableTagComponent} from '../atoms';
import {TableColumnViewComponent} from '../atoms/table-column-view/table-column-view.component';
import {
  ActionTypeEnum,
  ContentTypeColumnEnum,
  TableConfigModel,
  TableEventRowClick,
  TableThemeEnum
} from '../../models';
import Expected = jasmine.Expected;

describe('TableBasicComponent', () => {

  let component: TableBasicComponent;
  let fixture: ComponentFixture<TableBasicComponent>;

  const testData: TableConfigModel = {
    columns: [
      {
        field: 'column1',
        header: 'Column 1',
        type: ContentTypeColumnEnum.text,
        sort: true
      },
      {
        field: 'column2',
        header: 'Column 2',
        type: ContentTypeColumnEnum.tag,
        sort: false
      }
    ],
    data: [
      {
        column1: 'Row 1 Data 1',
        column2: true
      },
      {
        column1: 'Row 2 Data 1',
        column2: false
      }
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgxDatatableModule,
        NgIf,
        NgClass,
        NgFor,
        TableButtonComponent,
        TableTagComponent,
        TableColumnViewComponent,
        TableBasicComponent

      ],
      providers: [
        {
          provide: ContentTypeColumnEnum,
          useValue: ContentTypeColumnEnum
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an event on row click', () => {
    const col1 = {column1: 'test value'};
    const dataMock = () => {
      return [
        {...col1}
      ];
    };
    component.dataTable = {
      data: dataMock(),
      columns: [
        {
          field: 'column1',
          header: 'Columna 1',
          type: ContentTypeColumnEnum.text
        },
        {
          field: 'column2',
          header: 'Columna 2',
          type: ContentTypeColumnEnum.text
        }
      ],
      extra: {
        actions: {
          data: [{
            label: 'Editar',
            type: ActionTypeEnum.update,
            tooltip: 'Editar'
          }],
          header: 'Acciones'
        }
      }
    };

    const spy = spyOn(component.onRowClick, 'emit');
    const rowElements = fixture.nativeElement.querySelectorAll('ngx-table-button');
    rowElements[0].click();
    console.log(rowElements);
    const tableEventRowClick: Expected<TableEventRowClick<any> | undefined> = {row: col1, type: ActionTypeEnum.update};
    expect(spy).toHaveBeenCalledWith(tableEventRowClick);
  });

  it('should apply the correct theme', () => {
    component.theme = TableThemeEnum.dark;
    fixture.detectChanges();
    const tableElement = fixture.nativeElement.querySelector('ngx-datatable');
    expect(tableElement.classList.contains('dark')).toBeTruthy();
  });

  it('should apply the correct limit', () => {
    component.limit = 5;
    fixture.detectChanges();

    const tableElement: any = fixture.nativeElement.querySelector('table');
    expect(tableElement['ng-reflect-limit'] = '5').toBeTruthy();
  });

  it('should render the correct numberof columns', () => {
    const tableColumns: any[] = fixture.nativeElement.querySelectorAll('tbody tr td');
    if (component.dataTable && component.dataTable.columns) {
      expect(tableColumns.length).toEqual(component.dataTable?.columns?.length);
    } else {
      expect(tableColumns.length).toEqual(0);
    }
  });

  it('should render correct values for each column', () => {
    const tableColumns: any[] = fixture.nativeElement.querySelectorAll('tbody tr td');
    const column1Elements = tableColumns.filter(column => column.getAttribute('name') === 'Column 1');
    const column2Elements = tableColumns.filter(column => column.getAttribute('name') === 'Column 2');
  });

  it('should set the column resizable and sortable properties', () => {
    const headerCells: any[] = fixture.nativeElement.querySelectorAll('thead tr th');
    headerCells.forEach(cell => {
      const name = cell.getAttribute('name');
      const column = component.dataTable?.columns.find(column => column.header === name);

      expect(cell.dataset.resizable).toEqual('true');
      expect(cell.dataset.sortable).toEqual(!!column?.sort);
    });
  });

  it('should have flex column mode', () => {
    const tableElement = fixture.nativeElement.querySelector('ngx-datatable');
    expect(tableElement['ng-reflect-column-mode'] === 'flex').toBeTruthy();
  });
});
**/
