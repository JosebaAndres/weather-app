import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IWeather } from 'weather-app-library';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IWeathers } from '../models/weathers.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  /* GET weathers whose city name is search term */
  searchWeathers(term: string): Observable<Array<IWeather>> {
    if (term.trim().length < 3) {
      // if not search term or search term is less than 3, return empty weather array.
      return of([]);
    }
    const url = `${environment.serviceUrl}find?q=${term}&appid=${environment.serviceUrlApiKey}&units=metric&lang=en`;
    return this.http.get<IWeathers>(url).pipe(
      map((result) => {
        return result.list;
      }));
  }
}
