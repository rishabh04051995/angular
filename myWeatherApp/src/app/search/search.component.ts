import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import {WeatherService} from '../weather-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [WeatherService]
})
export class SearchComponent implements OnInit {
	@Output() receive = new EventEmitter<string>();
  public temp : any;
  constructor(private weather : WeatherService) { }
  a:boolean=false;
  

  ngOnInit() {
  }

   searchCity(city){
   this.weather.getCity(city).subscribe((res)=>{
   this.temp = res
   console.log(this.temp)
   this.receive.emit(this.temp)
   })
this.a=!true;

}
}
