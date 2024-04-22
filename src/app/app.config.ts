import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { timeZoneReducer } from './state/timezone.reducer';
import { provideEffects } from '@ngrx/effects';
import { TimeZoneEffects } from './state/timezone.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({
    timeZone: timeZoneReducer
  }),
  provideEffects(TimeZoneEffects),
  provideHttpClient()]
};
