import { Component, OnInit,TemplateRef } from '@angular/core';
import { WeatherService} from '../weather-service.service'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
    list : any =[] ;
    data : any;
    up: boolean = false;
    date: any;
    min: any;
    max: any;
    id: any;
    temp:any;
    public modalRef: BsModalRef;

  constructor(private service : WeatherService,private modalService: BsModalService) { }

 public openModal(template: TemplateRef<any>,data) {
    this.modalRef = this.modalService.show(template);
    this.up = !this.up;
  if(this.up==false)
  {
    this.date='';
    this.max='';
    this.min='';
  }
  this.id = data._id;


  }

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

update(data){
  this.up = !this.up;
  if(this.up==false)
  {
    this.date='';
    this.max='';
    this.min='';
  }
  this.id = data._id;

}
submit(dat: any){
    let data = {
    "date": this.date,
    "maxtemp": this.max,
    "mintemp": this.min
  }
  console.log(dat._id+", "+data)
  this.service.editData(dat._id,data)
  .subscribe((data)=>{
    this.getdata();
    this.up=!this.up
     if(this.up==false)
  {
    this.date='';
    this.max='';
    this.min='';
  }
    console.log(data)
  })
this.modalRef.hide();
}
 searchCity(city){
   this.service.getCity(city).subscribe((res)=>{
   this.temp = res
  console.log(this.temp)
})
   }
}
