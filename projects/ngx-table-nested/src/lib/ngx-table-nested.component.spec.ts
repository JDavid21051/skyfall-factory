import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTableNestedComponent } from './ngx-table-nested.component';

describe('NgxTableNestedComponent', () => {
  let component: NgxTableNestedComponent;
  let fixture: ComponentFixture<NgxTableNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTableNestedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTableNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
