import { Component,Output,Input } from '@angular/core';
import {WeatherService } from '../weather-service.service'
@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent  {
@Input('temp') temp:any;
  constructor(private list : WeatherService) { }

  obj:any ={};

  save(obj){
    console.log(obj)
    this.obj={
   "date":obj.date,
   	"maxtemp":obj.day.maxtemp_c,
   	"mintemp":obj.day.mintemp_c
    };
  console.log(this.obj);
  this.list.postCity(this.obj).subscribe((obj:any)=>{
  	console.log(obj);
  })
}

}
