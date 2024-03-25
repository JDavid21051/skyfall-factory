import {Component, Input, ViewEncapsulation} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {isViewImage, isViewTag, isViewText} from '../../../constants';
import {TableTagComponent} from '../table-tag/table-tag.component';
import {TableImageConfig, TableTagConfigModel, ContentTypeColumnEnum} from '../../../models';

const TAG_TEXT_ACTIVE = 'activo';
const TAG_TEXT_INACTIVE = 'inactive';

@Component({
  selector: 'ngx-table-column-view',
  standalone: true,
  imports: [NgIf, TableTagComponent, NgClass],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-container *ngIf="isText(type)">
      <span> {{ value }}</span>
    </ng-container>
    <ng-container *ngIf="isTag(type)">
      <ngx-table-tag
        [class]="(value === true ? 'active': 'inactive') + ' ' + getNgClass()"
        [content]="value ? (tagConfig.active?.text ?? tagTextActive) : (tagConfig.inactive?.text ?? tagTextInactive)"/>
    </ng-container>
    <ng-container *ngIf="isImage(type)">
      <img *ngIf="value else imgAlternative" [src]="value" width="auto" height="32"
           [alt]="imgConfig.alternativeText ?? 'alternative text'" class="table_img">
      <ng-template #imgAlternative>
        <span> {{ imgConfig.noImageText ?? 'n/a' }} </span>
      </ng-template>
    </ng-container>
  `
})
export class TableColumnViewComponent {
  @Input({required: true}) type: ContentTypeColumnEnum = ContentTypeColumnEnum.text;
  @Input({required: true}) value: any;
  @Input({required: false}) tagConfig: TableTagConfigModel = {};
  @Input({required: false}) imgConfig: TableImageConfig = {};

  readonly isText = isViewText;
  readonly isImage = isViewImage;
  readonly isTag = isViewTag;
  tagTextActive = TAG_TEXT_ACTIVE;
  tagTextInactive = TAG_TEXT_INACTIVE;

  getNgClass() {
    return <string>this.tagConfig[(this.value ? 'active' : 'inactive')]?.class;
  }
}
