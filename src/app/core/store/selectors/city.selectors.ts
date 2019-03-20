import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ICityState } from '../state/city.state';

const selectCities = (state: IAppState) => state.cities;

export const selectSearchedCities = createSelector(
    selectCities,
    (state: ICityState) => state.searchedCities
);

export const selectSelectedCityId = createSelector(
    selectCities,
    (state: ICityState) => state.selectedCityId
);
