import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  showMe:boolean=false;
  showManage:boolean=false;
  showimage:boolean=false;
  constructor() { }

  ngOnInit(): void {
    this.showimage=!this.showimage
  }

  toogleTag(){
    this.showMe=!this.showMe
    this.showManage=false;
    this.showimage=false;
  }
  profile(){
    this.showimage=!this.showimage
    this.showManage=false
    this.showMe=false;
  }
  manageTag(){
    this.showManage=!this.showManage 
    this.showMe=false;
    this.showimage=false;
  }

}
