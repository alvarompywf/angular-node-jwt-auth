import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export const appConfig: ApplicationConfig = {
  providers: [

    provideHttpClient(),
    provideAnimations(),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
  ],
};
