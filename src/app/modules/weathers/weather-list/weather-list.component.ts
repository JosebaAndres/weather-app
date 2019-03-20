import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IWeather } from 'weather-app-library';
import { WeatherService } from 'src/app/core/services/weather.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.sass']
})
export class WeatherListComponent implements OnInit {

  private searchTerms = new Subject<string>();

  $weathers: Observable<Array<IWeather>>;

  constructor(private weatherService: WeatherService) {
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.$weathers = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.weatherService.searchWeathers(term)),
    );
  }
}
