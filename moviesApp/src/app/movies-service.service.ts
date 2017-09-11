import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {
private apiUrl = "http://api.themoviedb.org/3/search/movie?api_key=08574a476db82c9ab74b9f2ba8eb4557&query=";

  constructor(private http : Http) { }

  getMoviesName(movie:string){
  	return this.http.get(this.apiUrl+movie).map(res =>
  		res.json(), (err:any) => {
  			err.json();
  		
  	});
  }

}
  
