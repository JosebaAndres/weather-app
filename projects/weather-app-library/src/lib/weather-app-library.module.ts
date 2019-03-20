import { NgModule } from '@angular/core';
import { WheatherViewerComponent } from './wheather-viewer/wheather-viewer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [WheatherViewerComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [WheatherViewerComponent]
})
export class WeatherAppLibraryModule { }
