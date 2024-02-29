import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNestedComponent } from './table-nested.component';

describe('Unit test for TableNestedComponent', () => {
  let component = new TableNestedComponent<{}>();
  let fixture: ComponentFixture<TableNestedComponent<{}>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TableNestedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent<TableNestedComponent<{}>>(TableNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // toggles row expansion when row is not expanded
  it('should toggle row expansion when row is not expanded', () => {
    const component = new TableNestedComponent<{}>();
    const row = { childrenKey: [], expanded: false };

    component.toggleExpandRow(row);

    expect(component.table.rowDetail.toggleExpandRow).toHaveBeenCalledWith(row);
    expect(component.tableRowExpanded).toEqual(row);
    expect(component.tableRowsCount).toEqual(row.childrenKey.length);
  });

  // Returns the correct height when tableRowsCount is 0.
  it('should return 0 when tableRowsCount is 0', () => {
    const component = new TableNestedComponent();
    component.childrenRowOff = 0;
    component.tableRowsCount = 0;
    expect(component.getDetailHeight()).toBe(0);
  });

  it('should return 0 when tableRowsCount is 0', () => {
    const component = new TableNestedComponent();
    component.tableRowsCount = 0;
    expect(component.calcRowCount()).toBe(0);
  });

});


/*
* import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableNestedComponent } from './table-nested.component';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { of } from 'rxjs';
import { TreeNestedColumnInterface, TableNestedThemeEnum, ActionConfigInterface } from './table-nested.model';

describe('TableNestedComponent', () => {
 let component: TableNestedComponent<any>;
 let fixture: ComponentFixture<TableNestedComponent<any>>;

 beforeEach(async () => {
   await TestBed.configureTestingModule({
     declarations: [ TableNestedComponent, DatatableComponent ]
   })
   .compileComponents();
 });

 beforeEach(() => {
   fixture = TestBed.createComponent(TableNestedComponent);
   component = fixture.componentInstance;
   fixture.detectChanges();
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 describe('toggleExpandRow', () => {
   it('should toggle expand row', () => {
     const row = {};
     const table = { rowDetail: { toggleExpandRow: jest.fn() } };
     component.table = table;
     component.toggleExpandRow(row);
     expect(table.rowDetail.toggleExpandRow).toHaveBeenCalledWith(row);
   });

   it('should set tableRowExpanded to row when row is not already expanded', () => {
     const row = {};
     const table = { rowDetail: { toggleExpandRow: jest.fn() } };
     component.table = table;
     component.tableRowExpanded = undefined;
     component.toggleExpandRow(row);
     expect(component.tableRowExpanded).toEqual(row);
   });

   it('should set tableRowExpanded to undefined when row is already expanded', () => {
     const row = {};
     const table = { rowDetail: { toggleExpandRow: jest.fn() } };
     component.table = table;
     component.tableRowExpanded = row;
     component.toggleExpandRow(row);
     expect(component.tableRowExpanded).toBeUndefined();
   });

   it('should update tableRowsCount when row is expanded', () => {
     const row = { [component.childrenKey]: of([{}, {}]) };
     const table = { rowDetail: { toggleExpandRow: jest.fn() } };
     component.table = table;
     component.toggleExpandRow(row);
     expect(component.tableRowsCount).toEqual(2);
   });
 });

 describe('getDetailHeight', () => {
   it('should return correct detail height when tableRowsCount is 0', () => {
     component.tableRowsCount = 0;
     const result = component.getDetailHeight();
     expect(result).toEqual(0);
   });

   it('should return correct detail height when tableRowsCount is less than or equal to childrenLimit', () => {
     component.tableRowsCount = 5;
     component.childrenRowHeight = 50;
     const result = component.getDetailHeight();
     expect(result).toEqual(50 * 5);
   });

   it('should return correct detail height when tableRowsCount is greater than childrenLimit', () => {
     component.tableRowsCount = 10;
     component.childrenRowHeight = 50;
     const result = component.getDetailHeight();
     expect(result).toEqual(50 * TableNestedComponent.TABLE_CHILDREN_LIMIT + TableNestedComponent.TABLE_CHILDREN_ROW_OFFSET);
   });
 });

 describe('calcRowCount', () => {
   it('should return tableRowsCount when tableRowsCount is 0', () => {
     component.tableRowsCount = 0;
     const result = component.calcRowCount();
     expect(result).toEqual(0);
   });

   it('should return tableRowsCount when tableRowsCount is less than or equal to childrenLimit', () => {
     component.tableRowsCount = 5;
     const result = component.calcRowCount();
     expect(result).toEqual(5);
   });

   it('should return
*
* */
