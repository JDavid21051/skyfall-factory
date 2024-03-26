/*
 * Project:      skyfall-factory
 * Developed by: Juan David Pelaez Cumbe
 * Date:         25/03/24 - 21:02
 * Module name:  table-tag.component.spec.ts
 * File name:    table-tag.component.spec.ts
 * IDE:          WebStorm
 */
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TableTagComponent} from './table-tag.component';
import {NgClass} from '@angular/common';

describe('Test for TableTagComponent', () => {
  let component: TableTagComponent;
  let fixture: ComponentFixture<TableTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableTagComponent, NgClass],
      providers: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the class property correctly to span element', () => {
    const className = 'example-class';
    component.class = className;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const span = compiled.querySelector('.table__tag');
    expect(span.classList.contains(className)).toBeTruthy();
  });

  it('should set the content property correctly to span element', () => {
    const content = 'example-content';
    component.content = content;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const span = compiled.querySelector('.table__tag');
    expect(span.textContent).toContain(content);
  });
});
