import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBasicComponent } from './table-basic.component';

describe('TableBasicComponent', () => {
  let component: TableBasicComponent<any>;
  let fixture: ComponentFixture<TableBasicComponent<any>>;

  beforeEach(async () => {

    fixture = TestBed.createComponent(TableBasicComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    TestBed.createComponent(TableBasicComponent<any>)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
