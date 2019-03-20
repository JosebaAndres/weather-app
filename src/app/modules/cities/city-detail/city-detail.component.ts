import { Component, OnInit, OnDestroy } from '@angular/core';
import { CityService } from 'src/app/core/services/city.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IWeather } from 'weather-app-library';
import { Observable, Subscription } from 'rxjs';
import { IForecast } from 'src/app/core/models/forecast.interface';
import { FavoriteCitiesService } from 'src/app/core/services/favorite-cities.service';
import { IAppState } from 'src/app/core/store/state/app.state';
import { Store } from '@ngrx/store';
import { SetSelectedCityId } from 'src/app/core/store/actions/city.actions';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.sass']
})
export class CityDetailComponent implements OnInit, OnDestroy {
  private routeParamsSubscription: Subscription;

  $weather: Observable<IWeather>;
  $forecasts: Observable<Array<IForecast>>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cityService: CityService,
    private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.routeParamsSubscription = this.activatedRoute.params.subscribe((params: Params) => {
      const id = +params.id;
      this.setId(id);
    });
  }

  setId(id: number) {
    this.store.dispatch(new SetSelectedCityId(id));
    this.getWeather(id);
    this.getForecast(id);
  }

  getWeather(id: number) {
    this.$weather = this.cityService.getWeather(id);
  }

  getForecast(id: number) {
    this.$forecasts = this.cityService.getForecasts(id);
  }

  ngOnDestroy() {
    if (this.routeParamsSubscription) {
      this.routeParamsSubscription.unsubscribe();
    }
  }
}
