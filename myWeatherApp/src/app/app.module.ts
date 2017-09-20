import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {WeatherService} from './weather-service.service'
import {HttpModule} from '@angular/http';
import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherComponent } from './weather/weather.component';
import { FavouritesComponent } from './favourites/favourites.component';

const approutes:Routes=[
{path: '', component: WeatherComponent},
{path: 'fav', component: FavouritesComponent},
{path: 'weather', component: WeatherListComponent},
{path: 'search', component: SearchComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WeatherListComponent,
    WeatherComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
