import { ICity } from '../../models/city.interface';

export interface ICityState {
    searchedCities: ICity[];
    selectedCityId: number;
}

export const initialCityState: ICityState = {
    searchedCities: null,
    selectedCityId: null
};
