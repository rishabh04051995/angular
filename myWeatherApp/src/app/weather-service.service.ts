import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';//import optional http module from @angular/http library to use http services
import 'rxjs/add/operator/map';// import for map
@Injectable()
export class WeatherService {
 private Url ="http://api.apixu.com/v1/forecast.json?key=a3144d13d5564071b3144126170909&q="
  constructor(private http : Http) { }
  // method for hitting api to retrieve data from api
  getCity(city:String){
  	return this.http.get(this.Url+city+ '&days=6').map((res:Response)=>res.json());
  }

}
