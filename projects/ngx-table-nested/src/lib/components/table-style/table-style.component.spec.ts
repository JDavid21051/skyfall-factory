import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TableStyleComponent} from './table-style.component';

describe('Test for TableStyleComponent', () => {
  let component: TableStyleComponent;
  let fixture: ComponentFixture<TableStyleComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStyleComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
