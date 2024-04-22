import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { TimezoneToPlanet } from '../models/timezone-to-planet.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getPlanetByTimeZone(timeZone: string): Observable<string> {
    // Simulating an API response
    const mockPlanets: TimezoneToPlanet = {
      EST: 'Mars',
      CST: 'Earth',
      MST: 'Venus',
      PST: 'Mercury'
    };
    console.log(mockPlanets);
    return of(mockPlanets[timeZone]);
  }
}
