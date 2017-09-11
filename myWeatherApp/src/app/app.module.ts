import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {WeatherService} from './weather-service.service'
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WeatherListComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
