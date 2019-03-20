import { IForecastMain } from './forecastMain.interface';
import { IWeather } from 'weather-app-library';

export interface IForecast {
    dt: Date;
    main: IForecastMain;
    weather: IWeather;
    dt_txt: Date;
}

