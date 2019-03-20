import { NgModule } from '@angular/core';

import { WeathersRoutingModule } from './weathers-routing.module';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [WeatherListComponent],
  imports: [
    WeathersRoutingModule,
    SharedModule
  ]
})
export class WeathersModule { }
