import { IWeather } from 'weather-app-library';

export interface IWeathers {
    count: number;
    list: Array<IWeather>;
}

