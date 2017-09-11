import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MovieService } from './movie-service.service';
import { MoviesComponent } from './movies/movies.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FavListComponent } from './fav-list/fav-list.component';

const apiRoutes: Routes = [
{
  path: 'search',
  component: MoviesComponent
},
{
  path: 'fav-movies',
  component: FavListComponent
}
];
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieSearchComponent,
    MovieListComponent,
    FavListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(apiRoutes)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
