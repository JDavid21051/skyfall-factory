import {Component, inject} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NgIf} from '@angular/common';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

import {TableNestedComponent, TableThemeEnum, TableActionColumnModel, ActionTypeEnum, ContentTypeColumnEnum} from 'ngx-table-nested';
import {TableButtonComponent} from '../../atom/table-button/table-button.component';
import {TableTagComponent} from '../../atom/table-tag/table-tag.component';
import {angularLogo, dosLogo} from './one';

export interface mockSpellsTreeTableData {
  id: string,
  name: string,
  effect: string,
  sideEffects: boolean,
  characteristics: string | null,
  time: string | null,
  difficulty: string,
  ingredients: {
    id: string,
    name: string
  }[],
  inventors: any[],
  manufacturer: null | string
}

export interface mockBookTreeTableData {
  id: number,
  Year: number,
  Title: string,
  handle: string,
  Publisher: string,
  ISBN: string,
  Pages: number,
  Notes: any[],
  created_at: string,
  villains: {
    actor: string,
    url: string
  }[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [NgIf, HttpClientModule, NgxDatatableModule, TableNestedComponent, TableButtonComponent, TableTagComponent],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly http = inject(HttpClient);
  spellMockData$$: Observable<mockSpellsTreeTableData[]> = this.http.get<mockSpellsTreeTableData[]>('../../../assets/mock/alternative.json');
  spellMockData?: mockSpellsTreeTableData[];
  bookListData$$: Observable<mockBookTreeTableData[]> = this.http.get<mockBookTreeTableData[]>('../../../assets/mock/books.json');
  bookListData?: mockBookTreeTableData[];
  parentColumns = [
    {header: 'Nombre', field: 'name', sort: true, type: ContentTypeColumnEnum.text},
    {header: 'Efecto', field: 'effect', sort: true, type: ContentTypeColumnEnum.text},
    {header: 'Desc Efecto', field: 'sideEffects', type: ContentTypeColumnEnum.tag},
    {header: 'imagen', field: 'time', type: ContentTypeColumnEnum.image},
    {header: 'Características', field: 'characteristics', type: ContentTypeColumnEnum.text},
    {header: 'Dificultad', field: 'difficulty', type: ContentTypeColumnEnum.text}
  ];

  childrenColumns = [
    {header: 'Nombre', field: 'name', type: ContentTypeColumnEnum.text},
    {header: 'Id', field: 'id', type: ContentTypeColumnEnum.text}
  ];

  config = [
    {
      label: 'Editar',
      icon: {
        icon: 'edit',
        class: 'far'
      },
      tooltip: 'Editar',
      type: ActionTypeEnum.update,
      click: this.clickEdit
    },
    {
      label: 'Crear',
      icon: {
        icon: 'add',
        class: 'far'
      },
      type: ActionTypeEnum.delete,
      tooltip: 'Crear',
      click: this.clickCreate
    }
  ];


  childrenConfig: TableActionColumnModel[] = [
    {
      label: 'Crear',
      icon: {
        icon: 'add',
        class: 'far'
      },
      tooltip: 'Crear',
      type: ActionTypeEnum.delete,
      click: this.clickCreate
    },
    {
      label: 'Eliminar',
      icon: {
        icon: 'delete',
        class: 'far'
      },
      tooltip: 'Eliminar',
      type: ActionTypeEnum.update,
      click: this.clickCreate
    }
  ];

  currentTheme: TableThemeEnum = TableThemeEnum.dark;
  treeThemeEnum = TableThemeEnum;

  constructor() {
    this.spellMockData$$.subscribe({
      next: (response) => {
        this.spellMockData = [];
        response.forEach((items, index:number) => {
          if (index === 1) {
            items['time'] = angularLogo;
          } else if (index === 2) {
            items['time'] = dosLogo;
          }
          items['sideEffects'] = (items.ingredients.length > 0);
          this.spellMockData?.push(items);
        })
      }
    });

    this.bookListData$$.subscribe({
      next: (response) => {
        this.bookListData = response;
      }
    });
  }

  clickCreate(res: any) {
    console.log(res, 'quiero crear');
  }

  clickEdit(res: any) {
    console.log(res, 'quiero edit');
  }

  setCurrentTheme(param: TableThemeEnum) {
    this.currentTheme = param;
  }

}
