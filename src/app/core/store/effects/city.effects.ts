import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import {
    ECityActions,
    GetSearchedCities,
    GetSearchedCitiesSuccess,
    GetSelectedCityId,
    GetSelectedCityIdSuccess,
    SetSelectedCityId,
    SetSelectedCityIdSuccess,
} from '../actions/city.actions';
import { FavoriteCitiesService } from '../../services/favorite-cities.service';

@Injectable()
export class CityEffects {

    @Effect()
    getSearchedCities$ = this.actions$.pipe(
        ofType<GetSearchedCities>(ECityActions.GetSearchedCities),
        switchMap(() => this.favoriteCitiesService.getSearchedCities()),
        map(cities => new GetSearchedCitiesSuccess(cities))
    );

    @Effect()
    getSelectedCityId$ = this.actions$.pipe(
        ofType<GetSelectedCityId>(ECityActions.GetSelectedCityId),
        switchMap(() => this.favoriteCitiesService.getSelectedCityId()),
        map(cities => new GetSelectedCityIdSuccess(cities))
    );

    @Effect()
    setSelectedCityId$ = this.actions$.pipe(
        ofType<SetSelectedCityId>(ECityActions.SetSelectedCityId),
        map(action => action.payload),
        switchMap(cityId => this.favoriteCitiesService.setSelectedCityId(cityId)),
        map(cityId => new SetSelectedCityIdSuccess(cityId))
    );

    constructor(
        private favoriteCitiesService: FavoriteCitiesService,
        private actions$: Actions
    ) { }
}
