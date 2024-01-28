import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHefestoComponent } from './ngx-hefesto.component';

describe('NgxHefestoComponent', () => {
  let component: NgxHefestoComponent;
  let fixture: ComponentFixture<NgxHefestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxHefestoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxHefestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
