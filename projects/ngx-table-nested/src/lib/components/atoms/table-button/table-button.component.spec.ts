/*
 * Project:      skyfall-factory
 * Developed by: Juan David Pelaez Cumbe
 * Date:         25/03/24 - 21:02
 * Module name:  table-tag.component.spec.ts
 * File name:    table-tag.component.spec.ts
 * IDE:          WebStorm
 */
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TableButtonComponent} from './table-button.component';
import {NgClass} from '@angular/common';
import {NgIf} from '@angular/common';
import {TableButtonTrashComponent} from '../table-icon-trash/table-button-trash.component';
import {TableButtonPenComponent} from '../table-icon-pen/table-button-pen.component';
import {ActionTypeEnum} from '../../../models';

describe('Test for TableButtonComponent', () => {
  let component: TableButtonComponent;
  let fixture: ComponentFixture<TableButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgClass,
        NgIf,
        TableButtonTrashComponent,
        TableButtonPenComponent,
        TableButtonComponent
      ]
      /*declarations: [
        NgClass,
        NgIf,
        TableButtonTrashComponent,
        TableButtonPenComponent
      ]*/
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the type of the button correctly', () => {
    const actionType = ActionTypeEnum;
    component.type = actionType.update;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const getElementRef = () => {
      const pen = compiled.querySelector('.ngx-icon-pen');
      const trash = compiled.querySelector('.ngx-icon-trash');
      return {pen, trash};
    };
    const icons = getElementRef();
    expect(icons.pen).toBeTruthy();
    expect(icons.trash).toBeNull();
    component.type = actionType.delete;
    fixture.detectChanges();
    const iconsAfterChange = getElementRef();
    expect(iconsAfterChange.trash).toBeTruthy();
    expect(iconsAfterChange.pen).toBeNull();
  });

  it('should set the classes to the button correctly based on type', () => {
    const updateType: ActionTypeEnum = ActionTypeEnum.update;
    const deleteType: ActionTypeEnum = ActionTypeEnum.delete;
    component.type = updateType;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('.table__btn');
    expect(button.classList.contains('update')).toBeTruthy();
    expect(button.classList.contains('delete')).toBeFalsy();
    component.type = deleteType;
    fixture.detectChanges();
    expect(button.classList.contains('update')).toBeFalsy();
    expect(button.classList.contains('delete')).toBeTruthy();
  });
});
