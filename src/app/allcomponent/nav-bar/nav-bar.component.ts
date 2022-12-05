import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private loginService:LoginService) { }

public loggedIn=false;


  ngOnInit(): void {
this.loggedIn=this.loginService.isLoggedIn()

  }

logoutUser(){
  this.loginService.logOut()
  location.reload()
}

}
