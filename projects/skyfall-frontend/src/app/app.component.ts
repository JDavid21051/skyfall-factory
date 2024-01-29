import {Component, inject} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NgIf} from '@angular/common';
import {TreeTableCollapseComponent} from '../../../ngx-hefesto/src/lib/components';
// import {TreeTableCollapseComponent} from 'ngx-hefesto';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {OpTreeThemeEnum} from '../../../ngx-hefesto/src/lib/interface/op-tree-theme.type';

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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [NgIf, HttpClientModule, NgxDatatableModule, TreeTableCollapseComponent],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'skyfall-frontend';
  private readonly http = inject(HttpClient)
  spellMockData$$: Observable<mockSpellsTreeTableData[]> = this.http.get<mockSpellsTreeTableData[]>('../../../assets/mock/alternative.json');
  spellMockData?: mockSpellsTreeTableData[];

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
      label: 'Editar',
      icon: {
        icon: 'edit',
        pack: 'far'
      },
      tooltip: 'Editar',
      click: this.clickEdit
    },
    {
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

  currentTheme: OpTreeThemeEnum = OpTreeThemeEnum.dark;
  treeThemeEnum = OpTreeThemeEnum;
  setCurrentTheme(param: OpTreeThemeEnum) {
    this.currentTheme = param
  }

  constructor() {
    this.spellMockData$$.subscribe({
      next: (response) => this.spellMockData = response
    })
  }
}
