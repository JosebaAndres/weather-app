import { RouterReducerState } from '@ngrx/router-store';

import { ICityState, initialCityState } from './city.state';


export interface IAppState {
    router?: RouterReducerState;
    cities: ICityState;
}

export const initialAppState: IAppState = {
    cities: initialCityState,
};

export function getInitialState(): IAppState {
    return initialAppState;
}
