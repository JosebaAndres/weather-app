import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NavComponent } from './layouts/nav/nav.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './core/store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { CityEffects } from './core/store/effects/city.effects';
import { StorageServiceModule } from 'ngx-webstorage-service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    StorageServiceModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([CityEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
