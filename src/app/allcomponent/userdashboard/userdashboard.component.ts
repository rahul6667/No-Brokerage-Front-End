import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ImageProcessingService } from 'src/app/services/image-processing.service';
import { OwnerserviceService } from 'src/app/services/ownerservice.service';
import { OwnerProperty } from 'src/app/_modelowner/adddata.model';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  alldata:any=[];
  ownProperty:OwnerProperty[]=[];
  allProperty:OwnerProperty[]=[];

  selectedValue:any;


  constructor(private ownerserviceService:OwnerserviceService,public imagesdialoge : MatDialog,
    private imageProcessingService:ImageProcessingService,
    private router:Router) { }
    cities:any= {};
    sendingdata:any={};
    createAccountForm!: FormGroup;
  ngOnInit(): void {
    this.getAllPropertyUser();
    this.getallcity();
  }


getallcity(){
  this.ownerserviceService.getcity().subscribe(
    Userdata=>{
      this.cities=Userdata;
      
 },
      error=>{
      console.log(error);
      }
)

  this.createAccountForm = new FormGroup({
    country: new FormControl('')
  });

}


public getAllPropertyUser(){
  this.ownerserviceService.getallvalueForUser()
  .pipe(
    map((x:any=this.ownProperty,i)=> x.map((ownerProperty:OwnerProperty)=>this.imageProcessingService.createImages(ownerProperty)))
  )
.subscribe(
    (response:OwnerProperty)=>{
this.alldata=response;

    },(error:HttpErrorResponse)=>{
      console.log(error);
    }

  );
}


showPropDetails(proId:any){
this.router.navigate(['/view-details',{propertyId:proId}]);
}

text='';



search(value:any){
 
  this.text += value.target.value;


  if(this.text==''){
    this.ownerserviceService.getallvalueForUser()
    .pipe(
      map((x:any=this.ownProperty,i)=> x.map((ownerProperty:OwnerProperty)=>this.imageProcessingService.createImages(ownerProperty)))
    )
  .subscribe(
      (response:OwnerProperty)=>{
  this.alldata=response;
 
      },(error:HttpErrorResponse)=>{
        console.log(error);
      }
  
    );
  }else{
    this.text +=","+this.selectedValue;
      return this.ownerserviceService.getAllPropertyByLocation(this.text)
      .pipe(
        map((x:any=this.ownProperty,i)=> x.map((ownerProperty:OwnerProperty)=>this.imageProcessingService.createImages(ownerProperty)))
      ).subscribe(
        (response:OwnerProperty)=>{
    this.alldata=response;
    this.text='';
   
        },(error:HttpErrorResponse)=>{
          console.log(error);
        }
    
      );







  }
}



}
