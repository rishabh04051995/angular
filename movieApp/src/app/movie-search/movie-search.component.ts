import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { MovieService } from '../movie-service.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})

export class MovieSearchComponent implements OnInit {
	public movies : any;
	@Output() movieList = new EventEmitter<any>();
  constructor( private MovieService : MovieService) { }

  ngOnInit() {
  }

  searchMovie(movie:string){
  	this.MovieService.getOnlineMovies(movie).subscribe((res) => {
  		this.movies = res.results;
  		this.movieList.emit(this.movies);
  	});
  }
}
