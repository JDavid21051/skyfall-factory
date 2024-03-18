import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {TableNestedThemeEnum} from 'ngx-table-nested';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>
  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as treeThemeEnum 'skyfall-frontend'`, () => {
    expect(app.treeThemeEnum).toEqual(TableNestedThemeEnum);
  });

  it('should render title', () => {
    fixture.detectChanges();
    expect(app.treeThemeEnum).toEqual(TableNestedThemeEnum);
  });
});
