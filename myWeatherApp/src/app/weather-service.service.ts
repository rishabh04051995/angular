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
  Expressapi ="http://localhost:3000/api/insert"
  postCity(data:String){
  return this.http.post(this.Expressapi,data).map((res:Response)=>res.json());

  }
 showFavList(){
 	var expressApi='http://localhost:3000/api/find'
    return this.http.get(expressApi)
    .map((res:Response)=>{
        return res.json()})

 }
 deleteData(id:any){
    var expressApi='http://localhost:3000/api/delete/'+id;
    return this.http.delete(expressApi)
    .map((res:Response)=>{
        res.json()
    })
}

editData(id:any, data:any){

  var expressApi='http://localhost:3000/api/update/'+id;
  return this.http.put(expressApi,data)
  .map((res:Response)=>{
    res.json()
  })
}
}
