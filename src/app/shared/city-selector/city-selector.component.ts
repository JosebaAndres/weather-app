import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FavoriteCitiesService } from 'src/app/core/services/favorite-cities.service';
import { ICity } from 'src/app/core/models/city.interface';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/core/store/state/app.state';
import { GetSearchedCities, GetSelectedCityId, SetSelectedCityId } from 'src/app/core/store/actions/city.actions';
import { selectSearchedCities, selectSelectedCityId } from 'src/app/core/store/selectors/city.selectors';

@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.sass']
})
export class CitySelectorComponent implements OnInit, OnDestroy {
  private currentCitySubscription: Subscription;

  $searchedCities: Observable<Array<ICity>> = this.store.pipe(select(selectSearchedCities));
  $selectedOption: Observable<number> = this.store.pipe(select(selectSelectedCityId));

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetSearchedCities());
    this.store.dispatch(new GetSelectedCityId());
  }

  changeSelectedOption(value: string) {
    this.store.dispatch(new SetSelectedCityId(+value));
  }

  ngOnDestroy() {
    if (this.currentCitySubscription) {
      this.currentCitySubscription.unsubscribe();
    }
  }
}
