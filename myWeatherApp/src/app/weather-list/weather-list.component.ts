import { Component, Output, Input, TemplateRef } from '@angular/core';
import { WeatherService } from '../weather-service.service'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent {
  @Input('temp') temp: any;
  public modalRef: BsModalRef;

  constructor(private list: WeatherService,private modalService: BsModalService) {}
  Data:any;
  data: any;
  f: any;
  
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  save(obj) {
 /*   console.log("dsafa")*/

    
   /* this.get(obj)
    console.log(this.f)
if(this.f==1)
{
    this. Data = {
      "date": this.obj.date,
      "maxtemp": this.obj.day.maxtemp_c,
      "mintemp": this.obj.day.mintemp_c
    };
    
    this.list.postCity(this.Data).subscribe((Data: any) => {
    
    })
  }
  this.f=0;

  }
*/
 /* get(obj){*/

    this.list.showFavList().subscribe((res) => {
      this.data = res;
      console.log(this.data)
      this.modalRef.hide();
       // console.log(this.data)
      }); 
 /* console.log(this.data)*/
      if(this.data.length>0){
        console.log(this.data.length)
      for(let i=0;i<this.data.length;i++) {
        if(this.data[i].date==obj.date && this.data[i].maxtemp==obj.day.maxtemp_c &&
          this.data[i].mintemp==obj.day.mintemp_c)
        {
this.f=0;
console.log(this.f)
        }
        else{
this.f=1;
console.log(this.f)
        }
      }
      
    }
    else this.f = 1;
    if(this.f==1)
{ 
    this. Data = {
      "date": obj.date,
      "maxtemp": obj.day.maxtemp_c,
      "mintemp": obj.day.mintemp_c
    };
    console.log(this.Data)
    
    this.list.postCity(this.Data).subscribe((Data: any) => {
    console.log(this.Data) 
    })
  } else{console.log("ok")}  
    
  }
    

/*if(this.data.length>0){
for(let i=0; i<this.data.length; i++)
{
if(this.data[i].date==obj.date && 
  this.data[i].mintemp==obj.mintemp && this.data[i].maxtemp==obj.maxtemp)
   {
    alert("sef");
   }
else {


    this.obj = {
      "date": obj.date,
      "maxtemp": obj.day.maxtemp_c,
      "mintemp": obj.day.mintemp_c
    };
    console.log(this.obj);
    this.list.postCity(this.obj).subscribe((obj: any) => {
      console.log(obj);
    })
  }
}
}
else {
  
}*/

}

