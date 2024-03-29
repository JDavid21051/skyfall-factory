/*
 *   Copyright (c) 2024
 *   All rights reserved.
 */
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

/*    "ngx-hefesto": "file:dist/ngx-hefesto/ngx-hefesto-0.0.1-alpha-9.tgz"*/
