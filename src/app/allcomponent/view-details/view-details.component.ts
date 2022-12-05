import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwnerserviceService } from 'src/app/services/ownerservice.service';
import { OwnerProperty } from 'src/app/_modelowner/adddata.model';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  selectedimageIndaex=0;
  alldata:any=[];
  ownerDetails:any=[];
  showOnerDetails:boolean=false;




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
 
  constructor(private activatedRoute:ActivatedRoute,private ownerserviceService:OwnerserviceService) { }

  ngOnInit(): void {
    
    this.sendingdata= this.activatedRoute.snapshot.data['ownerproperty'][0];
 

  }

  showOwnerDetails(){
 let id =this.sendingdata.propertyId;
 this.ownerserviceService.ownerDetailsById(id).subscribe(
  Userdata=>{
   this.ownerDetails=Userdata;
   console.log("od",this.ownerDetails);
    this.showOnerDetails=!this.showOnerDetails

},
    error=>{
  
    }
)




   // this.router.navigate(['/updateownerproperty/',{propertyId:propertyId}]);
  }


changeIndex(index:any){
this.selectedimageIndaex=index;
}

}
