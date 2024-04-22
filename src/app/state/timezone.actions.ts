import { createAction, props } from '@ngrx/store';

export const fetchPlanet = createAction(
  '[Time Zone] Fetch Planet',
  props<{ timeZone: string }>()
);

export const fetchPlanetSuccess = createAction(
  '[Time Zone] Fetch Planet Success',
  props<{ planet: string }>()
);

export const fetchPlanetFailure = createAction(
  '[Time Zone] Fetch Planet Failure'
);
