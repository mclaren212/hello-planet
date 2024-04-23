import { Injectable } from '@angular/core';
import { of, Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface GetPlanetResponse {
  planet: string
}

export interface ActivityData {
  action: string,
  value: string,
  timeStamp: Date
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  getPlanetByTimeZone(timeZone: string): Observable<GetPlanetResponse> {

    const functionUrl = 'https://getplanet.azurewebsites.net/api/getPlanet?timezone=' + timeZone;
    const resp: Observable<GetPlanetResponse> = this.http
      .get<GetPlanetResponse>(functionUrl);
    resp.subscribe(value => console.log(value));
    return resp;
  };

  logActivityToMongoDB(activityData: ActivityData) {
    const functionUrl = 'https://post-user-action.azurewebsites.net/api/post-user-action';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const opts = { headers };
    this.http.post<ActivityData>(functionUrl, activityData, opts).subscribe(response => console.log(response));;
  }
}
