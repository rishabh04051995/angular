import { Component, OnInit } from '@angular/core';
import { WeatherService} from '../weather-service.service'
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
    list : any =[] ;
    data : any;
  constructor(private service : WeatherService) { }

     getdata(){
    	
  	this.service.showFavList().subscribe((data)=>{
  		this.list=data;
  	})

    }

  ngOnInit() {
  	this.getdata();
    }

 

delete(id){
    this.service.deleteData(id._id)
    .subscribe((data)=>{
        this.data=data;
       this.getdata();
       console.log(this.list)
    })
}
}
