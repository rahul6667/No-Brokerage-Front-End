import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  showMe:boolean=false;
  mobError:boolean=false;
  fn:boolean=false;
  ln:boolean=false;
  un:boolean=false;
  pw:boolean=false;
  rl:boolean=false;
  regdetails={
    name:'',
    password:'',
    mobileNo:0,
    email:'',
    firstName:'',
    lastName:'',
    roll:''
  }

  foods: any[] = [
    {value: 'OWENER', viewValue: 'OWENER'},
    {value: 'USER', viewValue: 'USER'},
  ];

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }


  onSubmit(){
     
    

    if(this.regdetails.firstName==''){
      this.fn=!this.fn
     return false; 
    }
    else{
      this.fn=false
    }
    if(this.regdetails.lastName==''){
      this.ln=!this.ln
     return false; 
    }
    else{
      this.ln=false
    }

    if(this.regdetails.name==''){
      this.un=!this.un
     return false; 
    }
    else{
      this.un=false
    }

    if(this.regdetails.email==''){
      this.showMe=!this.showMe
     return false; 
    }
    else{
      this.showMe=false
    }


    if(this.regdetails.password==''){
      this.pw=!this.pw
     return false; 
    }
    else{
      this.pw=false
    }

    
    if(this.regdetails.roll==''){
      this.rl=!this.rl
     return false; 
    }
    else{
      this.rl=false
    }




    if((this.regdetails.name!='' && this.regdetails.password!='' &&this.regdetails.email!='')
    && (this.regdetails.name!=null && this.regdetails.password!=null&& this.regdetails.mobileNo!=null&& this.regdetails.email!=null))
    {

if(this.regdetails.mobileNo.toString().length!=10){
  this.mobError=!this.mobError
 return false; 
}
else{
  this.mobError=false
}



      if(this.regdetails.email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )){
       // return true;
        this.showMe=false
      }else 
      {
        this.showMe=!this.showMe
         return false;
      
      }
    
    
    
    this.loginService.registration(this.regdetails).subscribe(
      (response: any)=>{
        //success
        

    window.location.href= "/login"
   
    },
      (error: any)=>{
      
    console.log(error);
    }
    
    )
    ///genrate to token from here
    //"genrateToken" - http://localhost:8080/genrateToken
    //need  username-rashi ||  password-rashi123  POST
    
    
    
    
    }
    else{
      console.log("field are empty");
    }


  }

}
