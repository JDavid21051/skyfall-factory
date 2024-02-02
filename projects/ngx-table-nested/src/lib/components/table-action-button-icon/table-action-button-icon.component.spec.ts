import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableActionButtonIconComponent } from './table-action-button-icon.component';

describe('TableActionButtonIconComponent', () => {
  let component: TableActionButtonIconComponent;
  let fixture: ComponentFixture<TableActionButtonIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TableActionButtonIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableActionButtonIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
