import {Component, inject} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NgIf} from '@angular/common';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

import {TableNestedComponent, TableNestedThemeEnum, ActionConfigInterface, ButtonTypeEnum} from 'ngx-table-nested';
import {TableButtonComponent} from '../../atom/table-button/table-button.component';
import {TableTagComponent} from '../../atom/table-tag/table-tag.component';
import {ActionTypeEnum} from '../../../ngx-table-nested/src/lib/interfaces/tree-nested.models';

export interface mockSpellsTreeTableData {
  id: string,
  name: string,
  effect: string,
  sideEffects: boolean,
  characteristics: string | null,
  time: null,
  difficulty: string,
  ingredients: {
    id: string,
    name: string
  }[],
  inventors: any[],
  manufacturer: null | string
}

export interface mockSpellsTreeTableData {
  id: string,
  name: string,
  effect: string,
  sideEffects: boolean,
  characteristics: string | null,
  time: null,
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
  buttonTypeEnum = ButtonTypeEnum;
  typeCell = ActionTypeEnum;
  parentColumns = [
    {name: 'Nombre', keyValue: 'name', sort: true, type: this.typeCell.text},
    {name: 'Efecto', keyValue: 'effect', sort: true, type: this.typeCell.text},
    {name: 'Desc Efecto', keyValue: 'sideEffects', type: this.typeCell.tag},
    {name: 'Características', keyValue: 'characteristics', type: this.typeCell.text},
    {name: 'Dificultad', keyValue: 'difficulty', type: this.typeCell.text}
  ];

  childrenColumns = [
    {name: 'Nombre', keyValue: 'name', type: this.typeCell.text},
    {name: 'Id', keyValue: 'id', type: this.typeCell.text}
  ];

  config = [
    {
      label: 'Editar',
      icon: {
        icon: 'edit',
        pack: 'far'
      },
      tooltip: 'Editar',
      type: this.buttonTypeEnum.update,
      click: this.clickEdit
    },
    {
      label: 'Crear',
      icon: {
        icon: 'add',
        pack: 'far'
      },
      type: this.buttonTypeEnum.delete,
      tooltip: 'Crear',
      click: this.clickCreate
    }
  ];


  childrenConfig: ActionConfigInterface[] = [
    {
      label: 'Crear',
      icon: {
        icon: 'add',
        pack: 'far'
      },
      tooltip: 'Crear',
      type: this.buttonTypeEnum.delete,
      click: this.clickCreate
    },
    {
      label: 'Eliminar',
      icon: {
        icon: 'delete',
        pack: 'far'
      },
      tooltip: 'Eliminar',
      type: this.buttonTypeEnum.update,
      click: this.clickCreate
    }
  ];

  currentTheme: TableNestedThemeEnum = TableNestedThemeEnum.dark;
  treeThemeEnum = TableNestedThemeEnum;

  constructor() {
    this.spellMockData$$.subscribe({
      next: (response) => {
        console.log(response);
        this.spellMockData = [];
        response.forEach((items) => {
          console.log(items);
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

  setCurrentTheme(param: TableNestedThemeEnum) {
    this.currentTheme = param;
  }

  protected readonly ButtonTypeEnum = ButtonTypeEnum;
}
