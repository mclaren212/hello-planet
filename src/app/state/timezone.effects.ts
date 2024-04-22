import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as TimeZoneActions from './timezone.actions';
import { ApiService } from '../services/api.service';

@Injectable()
export class TimeZoneEffects {
  fetchPlanet$ = createEffect(() => this.actions$.pipe(
    ofType(TimeZoneActions.fetchPlanet),
    mergeMap(action =>
      this.apiService.getPlanetByTimeZone(action.timeZone).pipe(
        map(response => TimeZoneActions.fetchPlanetSuccess({ planet: response.planet })),
        catchError(() => of(TimeZoneActions.fetchPlanetFailure()))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private apiService: ApiService // Inject your API service here
  ) {}
}
