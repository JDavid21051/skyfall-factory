import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNestedComponent } from './table-nested.component';
import {Component} from '@angular/core';

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
