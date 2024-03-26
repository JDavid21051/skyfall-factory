import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TableColumnViewComponent} from './table-column-view.component';
import {NgClass} from '@angular/common';
import {NgIf} from '@angular/common';
import {isViewImage, isViewTag, isViewText} from '../../../constants';
import {TableTagComponent} from '../table-tag/table-tag.component';
import {ContentTypeColumnEnum} from '../../../models';

describe('Test for TableColumnViewComponent', () => {

  let component: TableColumnViewComponent;
  let fixture: ComponentFixture<TableColumnViewComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgIf,
        NgClass,
        TableTagComponent,
        TableColumnViewComponent
      ],
      providers: [
        {
          provide: ContentTypeColumnEnum,
          useValue: ContentTypeColumnEnum
        },
        {
          provide: isViewText,
          useValue: () => true
        },
        {
          provide: isViewTag,
          useValue: () => true
        },
        {
          provide: isViewImage,
          useValue: () => true
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableColumnViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the value as text if type is text', () => {
    component.type = ContentTypeColumnEnum.text;
    const eText: string = 'example text';
    component.value = eText;
    fixture.detectChanges();
    const text = compiled.querySelector('span');
    expect(text?.textContent).toEqual(eText);
  });

  it('should render the ngx-table-tag if type is tag', () => {
    component.type = ContentTypeColumnEnum.tag;
    component.value = true;
    fixture.detectChanges();
    const tag = compiled.querySelector('ngx-table-tag');
    expect(tag).toBeTruthy();
  });

  it('should render the image if type is image and value exists', () => {
    const value = 'https://example.com/image.jpg';
    component.type = ContentTypeColumnEnum.image;
    component.value = value;
    fixture.detectChanges();
    const img = compiled.querySelector('img');
    const src = img?.getAttribute('src');
    expect(src).toEqual(value);
  });

  it('should render the n/a text if type is image and value is empty', () => {
    component.type = ContentTypeColumnEnum.image;
    component.value = '';
    fixture.detectChanges();
    const span = compiled.querySelector('span');
    expect(span?.textContent).toEqual('n/a');
  });

});
