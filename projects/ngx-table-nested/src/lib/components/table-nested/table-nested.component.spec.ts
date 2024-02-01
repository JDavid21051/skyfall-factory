import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNestedComponent } from './table-nested.component';

describe('TableNestedComponent', () => {
  let component = new TableNestedComponent<any>();
  let fixture: ComponentFixture<TableNestedComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TableNestedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
