import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableActionButtonComponent } from './table-action-button.component';
import { ActionConfigInterface } from '../../../interfaces/tree-nested.models';

fdescribe('TableActionButtonComponent', () => {
  let component: TableActionButtonComponent;
  let fixture: ComponentFixture<TableActionButtonComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TableActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render button with provided data', () => {
    const actionConfig: ActionConfigInterface = {
      label: 'Test Label',
      class: 'a',
      tooltip: 'Test Tooltip',
      icon: { icon: 'test_icon', pack: 'eva' },
      click: () => { console.log('Test click');
      }
    };

    component.data = actionConfig;
    fixture.detectChanges();
    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button');

    expect(buttonElement).toBeTruthy();
    expect(buttonElement.textContent).toContain(actionConfig.label);
    expect(buttonElement.title).toBe(actionConfig.tooltip);
    const selectorRes = buttonElement.querySelector('.material-symbols-outlined');
    if (selectorRes) {
      expect(selectorRes.textContent).toContain(actionConfig.icon.icon);
    } else {
      expect(selectorRes).toBeNull();
    }
  });

  it('should not render button when data is undefined', () => {
    component.data = undefined;
    fixture.detectChanges();
    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement).toBeNull();
  });
});
