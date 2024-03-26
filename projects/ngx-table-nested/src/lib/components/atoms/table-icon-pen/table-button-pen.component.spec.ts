import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TableButtonPenComponent} from './table-button-pen.component';

describe('Test for TableButtonPenComponent', () => {
  let component: TableButtonPenComponent;
  let fixture: ComponentFixture<TableButtonPenComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TableButtonPenComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
