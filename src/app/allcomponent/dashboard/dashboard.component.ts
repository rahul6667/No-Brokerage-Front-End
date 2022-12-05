import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Username:any
  
  constructor(private adminserviceService:AdminserviceService) { }

  ngOnInit(): void {
  }
  getdata(){
this.adminserviceService.getdata().subscribe(
Userdata=>{

this.Username=Userdata;

},
error=>{

}




)
  }
}
