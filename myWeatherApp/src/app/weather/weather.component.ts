import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
	public temp : any;

  constructor() { }

  ngOnInit() {
  }
  onreceive(w:any){
   this.temp = w;
   console.log(this.temp)
  }

}
