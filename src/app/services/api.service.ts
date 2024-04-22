import { Injectable } from '@angular/core';
import { of, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface GetPlanetResponse {
  planet: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  getPlanetByTimeZone(timeZone: string): Observable<GetPlanetResponse> {

    const functionUrl = 'https://getplanet.azurewebsites.net/api/getPlanet?timezone=' + timeZone;
    // // Simulating an API response
    // const mockPlanets: TimezoneToPlanet = {
    //   EST: 'Mars',
    //   CST: 'Earth',
    //   MST: 'Venus',
    //   PST: 'Mercury'
    // };
    // console.log(mockPlanets);
    // return of(mockPlanets[timeZone]);
    const resp: Observable<GetPlanetResponse> = this.http
    .get<GetPlanetResponse>(functionUrl);
    resp.subscribe(value => console.log('Observable emitted the next value: ' + value));
    return resp;
  };
}
