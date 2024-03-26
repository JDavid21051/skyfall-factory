import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {TableThemeEnum} from 'ngx-table-nested';

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
    expect(app.treeThemeEnum).toEqual(TableThemeEnum);
  });

  it('should render title', () => {
    fixture.detectChanges();
    expect(app.currentTheme).toEqual(TableThemeEnum.dark);
  });
});
