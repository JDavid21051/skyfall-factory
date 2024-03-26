<header style="display: flex; align-items: center; justify-content:center; gap: 16px; width: 100%; max-height: 100px; border-bottom: 1px solid #8c8c8c;">

[![Logo](https://skillicons.dev/icons?i=angular&theme=light)][repo]
<h2 style="margin: auto 0"> Ngx Table Nested  </h2>
</header>

[repo]: https://github.com/JDavid21051/skyfall-factory

## Description

The ngx-table-nested library provides a powerful nested table built on top of @swimlane/ngx-datatable with the ability to collapse
rows to display a second table with a different column configuration than the parent.
It allows you to create flexible and organised user interfaces to display hierarchical and structured data. from projects

![Badge](https://img.shields.io/badge/STATUS-EN_DESAROLLO-green)
![Badge](https://img.shields.io/badge/LICENSE-MIT_LICENSE-blue )
![Badge](https://img.shields.io/badge/VERSION-0.2.0_beta-white)

## 🌒 Content

- [Requirements](#-requirements)
- [Usage](#-usage)
- [API](#-api)
- [Building](#-building)
- [Stats](#-stats)

[node]: https://nodejs.org/en

[angular]: https://angular.io/cli

[dateTable]: https://swimlane.gitbook.io/ngx-datatable/readme/installing

## 📖 Requirements

- [Nodejs >= v18.x][node] or

```bash 
brew install node 
```

- [@angular/cli >= V13.2.x][angular] or

```bash 
npm install -g @angular/cli 
```

- [@swimlane/ngx-datatable >= V20.xx][dateTable] or

```bash 
npm install @swimlane/ngx-datatable 
```

## 🪤 Usage

Once you have installed ngx-table-nested, you can import it in your AppModule:

> [!IMPORTANT]
> you need to have installed @swimlane/ngx-datatatable

```javascript 

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {AppComponent} from './app.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
// Import your TableNestedComponent
import {TableNestedComponent} from 'ngx-table-nested';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    // Specify TableNestedComponent as an import
    TableNestedComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}



```

### Or you can import it in your AppComponent (for this example):

```javascript
import {Component, inject} from '@angular/core';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {TableNestedComponent} from '@ngx-table-nested';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [NgxDatatableModule, TableNestedComponent],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
```

### In your html

- HTML

```html

<ngx-table-nested
  [theme]="lightTheme"
  [dataTable]="data"
  [columns]="columnConfig"
  [childrenKey]="'ingredients'"
  [childrenColumns]="childrenColumnConfig"
  [actionConfig]="actionConfig"
/>
```

## 🛠 Features

- nested tables with `different` (or the same) column configurations
- `Light`/`dark` theme support
- client side render
- standalone components standards
- column template support (`images`, `tags`, `text`, `buttons`, `icons`)
- use simplify

## 🌐 API

### Components

### TableNestedComponent

- ### Inputs

| Input     | Default   | Type               | Description                         |
|-----------|-----------|--------------------|-------------------------------------|
| dataTable | undefined | `TableConfigModel` | Configuration data for the table    |
| limit     | 5         | `number`           | Number of rows of show in the table |
| theme     | light     | `TableThemeEnum`   | Theme of the application            |

--- 

- ### Outputs

| Output             | Default | Type                               | Description                                                   |
|--------------------|---------|------------------------------------|---------------------------------------------------------------|
| onRowClick         |         | `EventEmitter<TableEventRowClick>` | Callback to invoke when row is clicked on                     |
| onRowClickChildren |         | `EventEmitter<TableEventRowClick>` | Callback to invoke when the row of the child table is clicked |

---

### TableBasicComponent

- ### Inputs

| Input     | Default   | Type               | Description                         |
|-----------|-----------|--------------------|-------------------------------------|
| dataTable | undefined | `TableConfigModel` | Configuration data for the table    |
| limit     | 5         | `number`           | Number of rows of show in the table |
| theme     | light     | `TableThemeEnum`   | Theme of the application            |

---

- ### Outputs

| Output     | Default | Type                               | Description                               |
|------------|---------|------------------------------------|-------------------------------------------|
| onRowClick |         | `EventEmitter<TableEventRowClick>` | Callback to invoke when row is clicked on |

---

### Enums

- `ContentTypeColumnEnum`

```typescript
enum ContentTypeColumnEnum {
  'icon' = 'icon',
  'tag' = 'tag',
  'text' = 'text',
  'image' = 'image'
}
```

- `ActionTypeEnum`

```typescript
enum ActionTypeEnum {
  'update' = 'update',
  'delete' = 'delete'
}
```

- `TableThemeEnum`

```typescript
enum TableThemeEnum {
  'light' = 'light',
  'dark' = 'dark'
}
```

### Interface

- ### TableEventRowClick

| properties | Default  | Type             | Description                            |
|------------|----------|------------------|----------------------------------------|
| type       | `update` | `ActionTypeEnum` | Type defining the action               |
| row        | `any`    | `T`              | Generic type received by the interface |

---

- ### TableColumnModel

| properties | Default     | Type                    | Description |
|------------|-------------|-------------------------|-------------|
| field      | `undefined` | `string`                |             |
| header     | `undefined` | `string`                |             |
| sort       | `false`     | `boolean`               |             |
| resize     | `false`     | `boolean`               |             |
| grow       | `1`         | `number`                |             |
| type       | `text`      | `ContentTypeColumnEnum` |             |

---

- ### TableIconActionColumnModel

| properties | Default     | Type     | Description |
|------------|-------------|----------|-------------|
| icon       | `undefined` | `string` |             |
| class      | `undefined` | `string` |             |

---

- ### TableColumnModel

| properties | Default     | Type                         | Description |
|------------|-------------|------------------------------|-------------|
| label      | `undefined` | `string`                     |             |
| icon       | `undefined` | `TableIconActionColumnModel` |             |
| type       | `update`    | `ActionTypeEnum`             |             |
| tooltip    | `undefined` | `string`                     |             |
| click      | `undefined` | `Function`                   |             |

---

- ### TableActioneConfigModel

| properties | Default    | Type                       | Description |
|------------|------------|----------------------------|-------------|
| data       | `[]`       | `TableActionColumnModel[]` |             |
| header     | `Acciones` | `string`                   |             |

---

- ### TableMessageConfigModel

| properties | Default     | Type     | Description |
|------------|-------------|----------|-------------|
| empty      | `undefined` | `string` |             |
| error      | `undefined` | `string` |             |

---

- ### TableExtraConfigModel

| properties | Default     | Type                      | Description |
|------------|-------------|---------------------------|-------------|
| actions    | `undefined` | `TableActioneConfigModel` |             |
| messages   | `undefined` | `TableMessageConfigModel` |             |
| sortType   | `single`    | `SortType`                |             |
| columnMode | `flex`      | `ColumnMode`              |             |

---

- ### TableChildrenConfigModel

| properties | Default     | Type                    | Description |
|------------|-------------|-------------------------|-------------|
| field      | `undefined` | `string`                |             |
| columns    | `[]`        | `TableColumnModel[]`    |             |
| extra      | `undefined` | `TableExtraConfigModel` |             |
| limit      | `5`         | `number`                |             |

---

- ### TableChildrenConfigModel

| properties | Default     | Type                       | Description |
|------------|-------------|----------------------------|-------------|
| data       | `any`       | `T`                        |             |
| columns    | `[]`        | `TableColumnModel[]`       |             |
| extra      | `undefined` | `TableExtraConfigModel`    |             |
| children   | `5`         | `TableChildrenConfigModel` |             |

---

## 🚀 Building

### Generate installer file (.tgz) locally

* ### Install dependency locally

```bash 
npm install 
```

* ### Compile library

```bash 
ng build ngx-table-nested 
```

* ### Generate installer

```bash 
npm pack ngx-table-nested 
```

## 📈 Stats


### Most Used Languages

![GitHub Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=JDavid21051&layout=compact&theme=theme)
