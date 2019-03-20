import { NgModule } from '@angular/core';

import { CitiesRoutingModule } from './cities-routing.module';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ForecastViewerComponent } from './forecast-viewer/forecast-viewer.component';

@NgModule({
  declarations: [
    CityDetailComponent,
    ForecastViewerComponent
  ],
  imports: [
    CitiesRoutingModule,
    SharedModule
  ]
})
export class CitiesModule { }
