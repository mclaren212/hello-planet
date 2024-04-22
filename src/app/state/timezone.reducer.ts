// state/timezone.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as TimeZoneActions from './timezone.actions';

export interface State {
  timeZone: {
    planet: String,
    loading: boolean,
    error: boolean
  }
  
}

export const initialState = {
  planet: '',
  loading: false,
  error: false
};

export const timeZoneReducer = createReducer(
  initialState,
  on(TimeZoneActions.fetchPlanet, state => ({ ...state, loading: true, error: false })),
  on(TimeZoneActions.fetchPlanetSuccess, (state, { planet }) => ({ ...state, planet, loading: false })),
  on(TimeZoneActions.fetchPlanetFailure, state => ({ ...state, loading: false, error: true }))
);
