import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userpassword:boolean=false;
  credentials={
    username:'',
    password:'',

  }



  constructor(private loginService: LoginService,private router:Router) { }

  ngOnInit(): void {
  }



  
  onSubmit(){

if((this.credentials.username!='' && this.credentials.password!='')&& (this.credentials.username!=null && this.credentials.password!=null))
{



this.loginService.generateToken(this.credentials).subscribe(
  (response: any)=>{
    //success

//this.loginService.loginUser(response.token)
let responsetoken=response.token;

this.loginService.setRoles(response.user.roll);
this.loginService.loginUser(responsetoken);

 if(response.user.roll==='OWENER'){
  this.userpassword=false;
  //this.router.navigate(['/dashboard']);
   window.location.href="/dashboard"
}
 else if(response.user.roll==='USER'){
  //this.router.navigate(['/userdashboard']);
  this.userpassword=false;
   window.location.href="/userdashboard"
 
 }
},
  (error: any)=>{
    this.userpassword=!this.userpassword
    return false; 
  

}

)
///genrate to token from here
//"genrateToken" - http://localhost:8080/genrateToken
//need  username-rashi ||  password-rashi123  POST




}
else{

}

  }
}
