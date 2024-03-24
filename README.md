<header style="display: flex; justify-content:center; gap: 16px; width: 100%; max-height: 400px;">
  <a href="https://github.com/JDavid21051/skyfall-factory" style="display: flex; align-items: center;">
    <?xml version="1.0" encoding="UTF-8"?>
    <svg style="height: 250px; width: 250px"  enable-background="new 0 0 250 250" version="1.1" viewBox="0 0 250 250" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
      <style type="text/css">
        .st0{fill:#DD0031;}
        .st1{fill:#C3002F;}
        .st2{fill:#FFFFFF;}
      </style>
      <polygon class="st0" points="125 30 125 30 125 30 31.9 63.2 46.1 186.3 125 230 125 230 125 230 203.9 186.3 218.1 63.2"/>
      <polygon class="st1" points="125 30 125 52.2 125 52.1 125 153.4 125 153.4 125 230 125 230 203.9 186.3 218.1 63.2"/>
      <path class="st2" d="m125 52.1-58.2 130.5h21.7l11.7-29.2h49.4l11.7 29.2h21.7l-58-130.5zm17 83.3h-34l17-40.9 17 40.9z"/>
    </svg>
    <h1 style="display: inline-flex"> Ngx Table Nested  </h1>
  </a>
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
