import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

Url="http://localhost:8080"


  constructor(private http:HttpClient,@Inject(SESSION_STORAGE) private storage: StorageService) {


   }

   sendnewdata(sendingdata:any){
   
      return this.http.post(`${this.Url}/addownerproperty`,sendingdata)
    }

   
registration(regdetails:any){
  return this.http.post(`${this.Url}/registration`,regdetails)
}


//to genrate token
generateToken(credentials:any){

  return this.http.post(`${this.Url}/genrateToken`,credentials)
}






//calling server to genrate server
  //for login user
   loginUser(token: string){
   
    sessionStorage.setItem("token",token)
    //localStorage.setItem("token",token)
   
       // this.storage.set("token",token);
    return true;
   }


public setRoles(roles:any){
  sessionStorage.setItem("roles",roles);
}

public getRoles(){
  return sessionStorage.getItem("roles");
}

public cleare(){
  sessionStorage.clear();
}


   isLoggedIn(){
let getTokenFromStorage=sessionStorage.getItem("token");
if(getTokenFromStorage==undefined || getTokenFromStorage==='' ||getTokenFromStorage==null)
{
  return false;
}
else{
return true;

}
   }
//for logout user
logOut(){
  sessionStorage.removeItem('token');
  return true;
}

getToken(){
 return sessionStorage.getItem("token");
 // this.storage.get("token");
}
}
