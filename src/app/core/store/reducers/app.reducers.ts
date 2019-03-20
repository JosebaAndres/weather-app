import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { cityReducers } from './city.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    cities: cityReducers,
};
