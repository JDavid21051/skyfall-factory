<h1 align="center">
  <a href="https://github.com/JDavid21051/skyfall-factory">

[![My Skills](https://skillicons.dev/icons?i=angular&theme=light)](https://skillicons.dev)
Ngx Table Nested

  </a>
</h1>

## Content

- [Description](#-description)
- [Requirements](#-requirements)
- [Manage this Angular lib](#-building)
- [License](#-license)

## 📋 Description
La librería ngx-table-nested proporciona una poderosa tabla anidada con capacidad para colapsar las filas para mostrar una segunda tabla con una configuración de columnas diferentes al padre. Permite crear interfaces de usuario flexibles y organizadas para mostrar datos jerárquicos y con estructuras definidas.


## Feature

### API
properties ables in Table-nested

#### Inputs

| Input           | Default      | Type         | Description                             |
|-----------------|--------------|--------------|-----------------------------------------|
| dataTable       | []           | T            | Generic type recived from the component |
| columns         | Content Cell | Content Cell |
| limit           | 10           | Content Cell |
| childrenColumns | []           | Content Cell |
| childrenLimit   | 3            | Content Cell |
| childrenKey     | Empty        | Content Cell |
| actionConfig    | []           | Content Cell |
| theme    | 'light'      | Content Cell |


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

## 🚀 Building

#### Install dependencies

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

## 📄 License

MIT License

Copyright (c) 2024 Juan David Pelaez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
