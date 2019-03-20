import { ICity } from './city.interface';
import { IForecast } from './forecast.interface';

export interface IForecasts {
    city: ICity;
    cnt: number;
    list: Array<IForecast>;
}

