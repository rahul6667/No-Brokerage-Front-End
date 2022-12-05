import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OwnerProperty } from '../_modelowner/adddata.model';
import {Router} from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class OwnerserviceService {

  constructor(private http: HttpClient,private router: Router) { }

  Url="http://localhost:8080"

public sendnewdata(adddata:FormData){
  
  return this.http.post<OwnerProperty>(`${this.Url}/addownerproperty`,adddata)
//return this.http.post<Adddata>(`${this.Url}/add_owner_property`,adddata);
}


getcity(){

 
  return this.http.get(`${this.Url}/getallcity`,)
}

getallvalue(){


   return this.http.get<OwnerProperty>(`${this.Url}/getAllProperty`,)
 }


 getallvalueForUser(){

  //return this.http.post<OwnerProperty>(`${this.Url}/addownerproperty`,adddata)
  //console.log("all request second");
   return this.http.get<OwnerProperty>(`${this.Url}/getAllPropertyForUser`,)
 }
 



 editdata(propertyId:number){

 // return this.http.delete<OwnerProperty>(`${this.Url}/deletebyid/`+propertyId,)
}

 deleteproperty(propertyId:number){
   return this.http.delete<OwnerProperty>(`${this.Url}/deletebyid/`+propertyId,)
 }

 getAllPropertyById(propertyId:any){
 

  return this.http.get<OwnerProperty>(`${this.Url}/getAllPropertyById/`+propertyId,)
 }

 ownerDetailsById(propertyId:any){
 return this.http.get(`${this.Url}/getOwnerDetailsById/`+propertyId,)
 }



 
 getAllPropertyByLocation(location:any){
 

  return this.http.get<OwnerProperty>(`${this.Url}/getPropertyByLocation/`+location,)
 }

}
