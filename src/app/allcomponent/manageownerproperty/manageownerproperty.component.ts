import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ImageProcessingService } from 'src/app/services/image-processing.service';
import { OwnerserviceService } from 'src/app/services/ownerservice.service';
import { OwnerProperty } from 'src/app/_modelowner/adddata.model';
import { ShowImageDialogComponent } from '../show-image-dialog/show-image-dialog.component';

@Component({
  selector: 'app-manageownerproperty',
  templateUrl: './manageownerproperty.component.html',
  styleUrls: ['./manageownerproperty.component.css']
})
export class ManageownerpropertyComponent implements OnInit {
  alldata:any=[];
  ownProperty:OwnerProperty[]=[];
  allProperty:OwnerProperty[]=[];
  constructor(private ownerserviceService:OwnerserviceService,private router: Router
    ,public imagesdialoge : MatDialog,
    private imageProcessingService:ImageProcessingService
    ) { }

  ngOnInit(): void {
    this.getallvalue();
  }

public getallvalue(){
  this.ownerserviceService.getallvalue()
  .pipe(
    map((x:any=this.ownProperty,i)=> x.map((ownerProperty:OwnerProperty)=>this.imageProcessingService.createImages(ownerProperty)))
  )

  
  .subscribe(
    (response:OwnerProperty)=>{

this.alldata=response;


    },(error:HttpErrorResponse)=>{
     
    }

  );
}

deleteProperty(propertyId:any){

//deleteproperty
this.ownerserviceService.deleteproperty(propertyId).subscribe(
  (response)=>{
    this.getallvalue();

        },(error:HttpErrorResponse)=>{
          console.log(error);
        }
);

}
//ye edit wala part he
getAllPropertyById(propertyId:any){
return this.ownerserviceService.getAllPropertyById(propertyId).subscribe(
  (response)=>{
    this.getallvalue();
  
        },(error:HttpErrorResponse)=>{
          console.log(error);
        }
);
}


showImage(item:any){

}


editdata(propertyId:number){
 
  this.router.navigate(['/updateownerproperty/',{propertyId:propertyId}]);
}


showimages(property:any){

this.imagesdialoge.open(ShowImageDialogComponent,{
  data:{
images:property.propertyImage

  },
  height:'300px',
  width:'400px'
});

 // this.router.navigate(['/updateownerproperty',{propertyId:propertyId}]);
}

}
