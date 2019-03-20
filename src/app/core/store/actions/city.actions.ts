import { Action } from '@ngrx/store';

import { ICity } from '../../models/city.interface';

export enum ECityActions {
    GetSearchedCities = 'GetSearchedCities',
    GetSearchedCitiesSuccess = 'GetSearchedCitiesSuccess',
    GetSelectedCityId = 'GetSelectedCity',
    GetSelectedCityIdSuccess = 'GetSelectedCityIdSuccess',
    SetSelectedCityId = 'SetSelectedCityId',
    SetSelectedCityIdSuccess = 'SetSelectedCityIdSuccess'
}

export class GetSearchedCities implements Action {
    public readonly type = ECityActions.GetSearchedCities;
}

export class GetSearchedCitiesSuccess implements Action {
    public readonly type = ECityActions.GetSearchedCitiesSuccess;
    constructor(public payload: ICity[]) { }
}

export class GetSelectedCityId implements Action {
    public readonly type = ECityActions.GetSelectedCityId;
}

export class GetSelectedCityIdSuccess implements Action {
    public readonly type = ECityActions.GetSelectedCityIdSuccess;
    constructor(public payload: number) { }
}

export class SetSelectedCityId implements Action {
    public readonly type = ECityActions.SetSelectedCityId;
    constructor(public payload: number) { }
}

export class SetSelectedCityIdSuccess implements Action {
    public readonly type = ECityActions.SetSelectedCityIdSuccess;
    constructor(public payload: number) { }
}

export type CityActions =
    GetSearchedCities |
    GetSearchedCitiesSuccess |
    GetSelectedCityId |
    GetSelectedCityIdSuccess |
    SetSelectedCityId |
    SetSelectedCityIdSuccess;
