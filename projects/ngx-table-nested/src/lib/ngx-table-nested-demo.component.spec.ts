import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTableNestedDemoComponent } from './ngx-table-nested-demo.component';

describe('NgxTableNestedComponent', () => {
  let component: NgxTableNestedDemoComponent;
  let fixture: ComponentFixture<NgxTableNestedDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTableNestedDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTableNestedDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
