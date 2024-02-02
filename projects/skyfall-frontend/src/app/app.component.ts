import {Component, inject} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NgIf} from '@angular/common';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {
  TableNestedComponent
} from '../../../ngx-table-nested/src/lib/components';

import {
  TableNestedThemeEnum,
  ActionTypeEnum, ActionConfigInterface
} from '../../../ngx-table-nested/src/lib/interfaces/tree-nested.models';
import {TableBasicComponent} from 'ngx-table-nested';

export interface mockSpellsTreeTableData {
  id: string,
  name: string,
  effect: string,
  sideEffects: string,
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
  sideEffects: string,
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
  imports: [NgIf, HttpClientModule, NgxDatatableModule, TableBasicComponent, TableNestedComponent],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly http = inject(HttpClient);
  spellMockData$$: Observable<mockSpellsTreeTableData[]> = this.http.get<mockSpellsTreeTableData[]>('../../../assets/mock/alternative.json');
  spellMockData?: mockSpellsTreeTableData[];

  bookListData$$: Observable<mockBookTreeTableData[]> = this.http.get<mockBookTreeTableData[]>('../../../assets/mock/books.json');
  bookListData?: mockBookTreeTableData[];

  parentColumns = [
    {name: 'Nombre', keyValue: 'name', sort: true},
    {name: 'Efecto', keyValue: 'effect', sort: true},
    {name: 'Desc Efecto', keyValue: 'sideEffects'},
    {name: 'Características', keyValue: 'characteristics'},
    {name: 'Dificultad', keyValue: 'difficulty'}
  ];

  childrenColumns = [
    {name: 'Nombre', keyValue: 'name'},
    {name: 'Id', keyValue: 'id'}
  ];

  config = [
    {
      label: 'Editar',
      icon: {
        icon: 'edit',
        pack: 'far'
      },
      tooltip: 'Editar',
      class: 'btn',
      click: this.clickEdit
    },
    {
      label: 'Crear',
      icon: {
        icon: 'add',
        pack: 'far'
      },
      class: 'btn',
      tooltip: 'Crear',
      click: this.clickCreate
    }
  ];


  childrenConfig: ActionConfigInterface[] = [
    {
      label: 'Editar',
      icon: {
        icon: 'edit',
        pack: 'far'
      },
      tooltip: 'Editar',
      class: 'btn-info',
      click: this.clickEdit
    },
    {
      label: 'Crear',
      icon: {
        icon: 'add',
        pack: 'far'
      },
      tooltip: 'Crear',
      class: 'btn-info',
      click: this.clickCreate
    },
    {
      label: 'Eliminar',
      icon: {
        icon: 'delete',
        pack: 'far'
      },
      tooltip: 'Eliminar',
      class: 'btn-info',
      click: this.clickCreate
    }
  ];

  currentTheme: TableNestedThemeEnum = TableNestedThemeEnum.dark;
  treeThemeEnum = TableNestedThemeEnum;

  constructor() {
    this.spellMockData$$.subscribe({
      next: (response) => {
        this.spellMockData = response;
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

}
