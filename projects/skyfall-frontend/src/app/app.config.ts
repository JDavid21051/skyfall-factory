/*
 *   Copyright (c) 2024
 *   All rights reserved.
 */
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {ApplicationConfig} from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
