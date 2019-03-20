import { Component, Input } from '@angular/core';
import { IWeather } from '../models/weather.interface';

export declare type WheatherViewerViewTypes = 'card' | 'detail';

@Component({
  selector: 'lib-wheather-viewer',
  templateUrl: './wheather-viewer.component.html',
  styleUrls: ['./wheather-viewer.component.css']
})
export class WheatherViewerComponent {
  @Input() weather: IWeather;
  @Input() viewType: WheatherViewerViewTypes = 'card';

  constructor() { }
}
