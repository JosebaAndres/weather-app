import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IWeather } from 'weather-app-library';
import { environment } from 'src/environments/environment';
import { IForecasts } from '../models/forecasts.interface';
import { IForecast } from '../models/forecast.interface';
import { map } from 'rxjs/operators';
import { ICity } from '../models/city.interface';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  /* GET city weather */
  getWeather(id: number): Observable<IWeather> {
    const url = `${environment.serviceUrl}weather?id=${id}&appid=${environment.serviceUrlApiKey}&units=metric&lang=en`;
    return this.http.get<IWeather>(url);
  }

  /* GET city forecasts */
  getForecasts(id: number): Observable<Array<IForecast>> {
    const url = `${environment.serviceUrl}forecast?id=${id}&appid=${environment.serviceUrlApiKey}&units=metric&lang=en`;
    return this.http.get<IForecasts>(url).pipe(
      map((result) => {
        return result.list;
      }));
  }

  /** GET all cities. */
  getCities(): Observable<Array<ICity>> {
    return this.http.get<Array<ICity>>('./assets/data/city.list.json');
  }

  /** GET city by id. */
  getCity(id: number): Observable<ICity> {
    return this.getCities().pipe(
      map((allCities) => {
        const filteredCities = allCities.filter((data) => data.id === id);
        if (filteredCities.length === 1) {
          return filteredCities[0];
        } else {
          return null;
        }
      }));
  }
}
