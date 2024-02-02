import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableActionFactoryComponent } from './table-action-factory.component';

describe('TableActionFactoryComponent', () => {
  let component: TableActionFactoryComponent;
  let fixture: ComponentFixture<TableActionFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TableActionFactoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableActionFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
