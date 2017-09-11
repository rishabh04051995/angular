import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviesService } from './movies-service.service

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieSearchComponent,
    MovieListComponent,
    MoviesService
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
