import { Component, Input } from '@angular/core';
import { IForecast } from 'src/app/core/models/forecast.interface';

@Component({
  selector: 'app-forecast-viewer',
  templateUrl: './forecast-viewer.component.html',
  styleUrls: ['./forecast-viewer.component.sass']
})
export class ForecastViewerComponent {
  @Input() forecast: IForecast;

  constructor() { }
}
