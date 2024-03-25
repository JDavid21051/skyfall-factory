<header style="display: flex; align-items: center; justify-content:center; gap: 16px; width: 100%; max-height: 100px;">
<h1 style="display: flex; align-items: center; justify-content:center; gap: 16px">
    <a href="https://github.com/JDavid21051/skyfall-factory">

[![My Skills](https://skillicons.dev/icons?i=angular&theme=light)](https://angular.io)

<span style="display: inline-flex"> Ngx Table Nested  </span>

</a>
</h1>
</header>

## Content

- [Description](#-description)
- [Requirements](#-requirements)
- [Manage this Angular lib](#-building-v06)

## 📋 Description

The ngx-table-nested library provides a powerful nested table built on top of @swimlane/ngx-datatable with the ability to collapse
rows to display a second table with a different column configuration than the parent.
It allows you to create flexible and organised user interfaces to display hierarchical and structured data.

## 📋 Usage

Once you have installed ngx-table-nested, you can import it in your AppModule:

```javascript 

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

import {AppComponent} from './app.component';

// Import your TableNestedComponent
import {TableNestedComponent} from 'ngx-table-nested';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // Specify TableNestedComponent as an import
    TableNestedComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}



```

#### Or you can import it in your AppComponent (for this example):

```javascript
import {Component, inject} from '@angular/core';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {TableNestedComponent} from '@ngx-table-nested';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [TableNestedComponent],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
```

#### Table

##### TS

```typescript
const data = [];
const columnConfig = [];
const childrenColumnConfig = [];
const actionConfig = [];
const lightTheme = TableNestedThemeEnum.light;

```

##### HTML

```text
<ngx-table-nested *ngIf="data"
    [theme]="lightTheme"
    [dataTable]="data"
    [columns]="columnConfig"
    [childrenKey]="'ingredients'"
    [childrenColumns]="childrenColumnConfig"
    [actionConfig]="actionConfig"
/>
```

## Feature

### API

properties ables in Table-nested

#### Inputs

| Input           | Default      | Type         | Description                                 |
|-----------------|--------------|--------------|---------------------------------------------|
| dataTable       | Empty        | T            | Generic type recived from the component     |
| columns         | Content Cell | Content Cell | List of columns to show in table            |
| limit           | 10           | Content Cell | Number of rows of show in the table         |
| childrenColumns | Empty        | Content Cell | List of columns to show in childtable       |
| childrenLimit   | 3            | Content Cell | Number of rows of show in the childrentable |
| childrenKey     | Empty        | Content Cell |
| actionConfig    | Empty        | Content Cell |
| theme           | light        | Content Cell | Theme of the aplication                     |

#### Interface

## 📖 Requirements

- [Nodejs >= v18.x][node]

```bash 
brew install node 
```

- [@angular/cli >= V13.2.x][angular]

```bash 
npm install -g @angular/cli 
```

- [@swimlane/ngx-data >= V20.xx][dateTable]

```bash 
npm install @swimlane/ngx-datatable 
```

[node]: https://nodejs.org/en

[angular]: https://angular.io/cli

[dateTable]: https://swimlane.gitbook.io/ngx-datatable/readme/installing

## 🚀 Building v0.6

#### Install dependencies

generate installer file (.tgz) locally

```bash 
npm install 
```

#### Compile library

```bash 
ng build ngx-table-nested 
```

#### Generate installer

```bash 
npm pack ngx-table-nested 
```
