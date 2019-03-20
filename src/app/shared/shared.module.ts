import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CitySelectorComponent } from './city-selector/city-selector.component';
import { FormsModule } from '@angular/forms';
import { WeatherAppLibraryModule } from 'weather-app-library';

@NgModule({
  declarations: [CitySelectorComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    WeatherAppLibraryModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,

    WeatherAppLibraryModule,

    CitySelectorComponent
  ]
})
export class SharedModule { }
