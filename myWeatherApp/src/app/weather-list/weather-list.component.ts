import { Component, OnInit,Output,Input } from '@angular/core';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
@Input('temp') temp:any;
  constructor() { }

  ngOnInit() {
  }

}
