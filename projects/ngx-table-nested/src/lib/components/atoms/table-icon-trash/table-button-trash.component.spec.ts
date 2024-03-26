import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TableButtonTrashComponent} from './table-button-trash.component';

describe('Test for TableButtonTrashComponent', () => {
  let component: TableButtonTrashComponent;
  let fixture: ComponentFixture<TableButtonTrashComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TableButtonTrashComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
