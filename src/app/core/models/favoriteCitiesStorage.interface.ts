import { ICity } from './city.interface';

export interface IFavoriteCitiesStorage {
    currentCityId: number;
    favoriteCities: Array<ICity>;
}

export function isFavoriteCitiesStorage(value: any): value is IFavoriteCitiesStorage {
    if (value &&
        value.currentCityId &&
        typeof value.currentCityId === 'number' &&
        value.favoriteCities &&
        Array.isArray(value.favoriteCities)) {
        return true;
    } else {
        return false;
    }
}
