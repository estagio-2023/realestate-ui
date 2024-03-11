import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import routerConfig from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routerConfig)]  
};
