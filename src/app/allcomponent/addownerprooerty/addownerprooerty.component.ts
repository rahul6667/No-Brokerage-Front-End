import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { OwnerserviceService } from 'src/app/services/ownerservice.service';
import { OwnerProperty } from 'src/app/_modelowner/adddata.model';
import { FileHandle } from 'src/app/_modelowner/file_handle.model';


@Component({
  selector: 'app-addownerprooerty',
  templateUrl: './addownerprooerty.component.html',
  styleUrls: ['./addownerprooerty.component.css']
})
export class AddownerprooertyComponent implements OnInit {

  sendingdata:OwnerProperty={
    propertyId:"",
    propertyName:"",
    city:"",
    location:"",
    address:"",
    pricerange:0,
    bhk:"",
    typeRoom:"",
    availability:"",
    facility:"",
    nearLocation:"",
    typeFamily:"",
    parking:"" ,
    propertyImage:[]
  }


  createAccountForm!: FormGroup;
  cities:any= {};
  constructor(private ownerserviceService:OwnerserviceService
    ,private sanitizer:DomSanitizer
    ,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   
    this.ownerserviceService.getcity().subscribe(
      Userdata=>{
        this.cities=Userdata;
       
   },
        error=>{
        
        }
)

    this.createAccountForm = new FormGroup({
      country: new FormControl('')
    });



  }

  
autocall(){
  this.ownerserviceService.getcity().subscribe(
    Userdata=>{
      this.cities=Userdata;
      
     
 },
      error=>{
     
      }
)

}

  adddatafunction(dtaform:NgForm){

const sendingformdata=this.prepareFormData(this.sendingdata);
this.ownerserviceService.sendnewdata(sendingformdata).subscribe(
(response:OwnerProperty)=>{


  dtaform.reset();
  this.sendingdata.propertyImage=[];
  
  window.location.href= "/dashboard"
},(error:HttpErrorResponse)=>{
 
}

);

}



prepareFormData(ownerPropert:OwnerProperty):FormData{

const formdata= new FormData();
formdata.append('ownerProperty',
new Blob([JSON.stringify(ownerPropert)],{type:'application/json'})
);

for(var i=0;i< ownerPropert.propertyImage.length;i++){
  formdata.append(
    'imageFile',
    ownerPropert.propertyImage[i].file,
    ownerPropert.propertyImage[i].file.name
  );

}


return  formdata;
}




  onFileSelected(myfile: any){
 

  if(myfile.target.files){
    
   const file= myfile.target.files[0];
   
   
   const fileHandle: FileHandle={
    
    file:file,
    url: this.sanitizer.bypassSecurityTrustUrl(
      window.URL.createObjectURL(file)
    )
   }
   
this.sendingdata.propertyImage.push(fileHandle);



  }
}

removeImage(i:number){
  this.sendingdata.propertyImage.splice(i,1);
}



fileDropped(fileHandle:FileHandle){

this.sendingdata.propertyImage.push(fileHandle);
}

}
