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
  public tempo : any;
  city:any;
  constructor(private weather : WeatherService) { }
  a:boolean=false;
  

  ngOnInit() {
    this. searchCity(this.city)
  }

   searchCity(city){
   this.weather.getCity(city).subscribe((res)=>{
   this.tempo = res
   console.log(this.tempo)
   this.receive.emit(this.tempo)
   })
this.a=!true;

}
}
