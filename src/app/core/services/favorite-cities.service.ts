import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICity } from '../models/city.interface';
import { CityService } from './city.service';
import { Router, } from '@angular/router';
import { map } from 'rxjs/operators';
import { IFavoriteCitiesStorage, isFavoriteCitiesStorage } from '../models/favoriteCitiesStorage.interface';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const FAVOURITE_CITIES_STORAGE_KEY = 'local_todolist';

@Injectable({
  providedIn: 'root'
})
export class FavoriteCitiesService {
  private dataStore: IFavoriteCitiesStorage;

  constructor(
    @Inject(LOCAL_STORAGE) private localStorageService: StorageService,
    private cityService: CityService,
    private router: Router) {
    this.loadStoredData();
  }

  private loadStoredData() {
    const storedData = this.localStorageService.get(FAVOURITE_CITIES_STORAGE_KEY);
    if (isFavoriteCitiesStorage(storedData)) {
      this.dataStore = storedData;
    } else {
      this.dataStore = {
        currentCityId: null,
        favoriteCities: new Array<ICity>()
      };
    }
  }

  private saveStoredData() {
    this.localStorageService.set(FAVOURITE_CITIES_STORAGE_KEY, this.dataStore);
  }

  getSearchedCities(): Observable<Array<ICity>> {
    return of(this.dataStore.favoriteCities);
  }

  getSelectedCityId(): Observable<number> {
    return of(this.dataStore.currentCityId);
  }

  setSelectedCityId(cityID: number): Observable<number> {
    if (!this.dataStore.currentCityId || this.dataStore.currentCityId !== cityID) {
      return this.cityService.getCity(cityID).pipe(
        map((city) => {
          this.dataStore.currentCityId = cityID;
          this.tryAddCity(city);
          if (this.dataStore.currentCityId) {
            this.router.navigate(['cities', 'detail', this.dataStore.currentCityId]);
          }
          this.saveStoredData();
          return city.id;
        })
      );
    } else {
      return this.getSelectedCityId();
    }
  }

  tryAddCity(newCity: ICity) {
    const filteredFavoriteCities = this.dataStore.favoriteCities.filter(user => user.id === newCity.id);
    if (filteredFavoriteCities.length < 1) {
      this.dataStore.favoriteCities.push(newCity);
    }
  }
}
