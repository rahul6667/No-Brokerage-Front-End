import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { OwnerProperty } from '../_modelowner/adddata.model';
import { ImageProcessingService } from './image-processing.service';
import { OwnerserviceService } from './ownerservice.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<OwnerProperty>{
  ownProperty:OwnerProperty[]=[];
  constructor(private ownerserviceService:OwnerserviceService,
    private imageProcessingService:ImageProcessingService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OwnerProperty> {

   const id= route.paramMap.get("propertyId")
  if(id){

  //  return this.http.get<OwnerProperty>(`${this.Url}/getAllPropertyById/`+propertyId,)
//getAllPropertyById
 
// return this.ownerserviceService.getAllPropertyById(id)
//  .pipe(
//   map(p=>this.imageProcessingService.createImages(p))
//  );



 return this.ownerserviceService.getAllPropertyById(id)
 .pipe(
   map((x:any=this.ownProperty,i)=> x.map((ownerProperty:OwnerProperty)=>this.imageProcessingService.createImages(ownerProperty)))
 )



//  .pipe(
//   map((x:any=this.ownProperty,i)=> x.map((ownerProperty:OwnerProperty)=>this.imageProcessingService.createImages(ownerProperty)))
// )
  }
  else{
return of(this.getpropertyDetails());

  }

   // throw new Error('Method not implemented.');
  }

getpropertyDetails(){

return  {
  propertyId:"",
  propertyName:"",
  city: "",
  location: "",
  address: "",
  pricerange: 0,
  bhk: "",
  typeRoom: "",
  availability: "",
  facility: "",
  nearLocation: "",
  typeFamily: "",
  parking: "",
  propertyImage: [],
}
}


}
