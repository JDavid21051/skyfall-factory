import {Component, inject} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NgIf} from '@angular/common';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {
  TableNestedComponent,
  TableNestedThemeEnum,
  ActionTypeEnum,
  TableSpinnerComponent
} from 'ngx-table-nested';

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
  imports: [NgIf, HttpClientModule, NgxDatatableModule, TableSpinnerComponent, TableNestedComponent],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly http = inject(HttpClient)
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
  ]

  config = [
    {
      type: ActionTypeEnum.icon,
      label: 'Editar',
      icon: {
        icon: 'edit',
        pack: 'far'
      },
      tooltip: 'Editar',
      click: this.clickEdit
    },
    {
      type: ActionTypeEnum.icon,
      label: 'Crear',
      icon: {
        icon: 'add',
        pack: 'far'
      },
      tooltip: 'Crear',
      click: this.clickCreate
    },
  ]

  clickCreate(res: any) {
    console.log(res, 'quiero crear');
  }

  clickEdit(res: any) {
    console.log(res, 'quiero edit');
  }

  currentTheme: TableNestedThemeEnum = TableNestedThemeEnum.dark;
  treeThemeEnum = TableNestedThemeEnum;
  setCurrentTheme(param: TableNestedThemeEnum) {
    this.currentTheme = param
  }

  constructor() {
    this.spellMockData$$.subscribe({
      next: (response) => {
        this.spellMockData = response;
      }
    })

    this.bookListData$$.subscribe({
      next: (response) => {
        this.bookListData = response;
      }
    })
  }
}
