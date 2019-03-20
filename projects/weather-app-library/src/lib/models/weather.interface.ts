import { IWeatherMoreInfo } from './weatherMoreInfo.interface';
import { IWeatherMain } from './weatherMain.interface';
import { IWeatherWind } from './weatherWind.interface';
import { IWeatherClouds } from './weatherClouds.interface';
import { IWeatherSys } from './weatherSys.interface';

export interface IWeather {
    coord: Coordinates;
    weather: Array<IWeatherMoreInfo>;
    main: IWeatherMain;
    wind: IWeatherWind;
    visibility: number;
    clouds: IWeatherClouds;
    dt: Date;
    sys: IWeatherSys;
    id: number;
    name: string;
    cod: number;
}

