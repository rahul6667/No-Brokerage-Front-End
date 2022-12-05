import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  baseUrl="http://localhost:8080"
  
  constructor(private http:HttpClient) { }

  getdata(){

  
  return this.http.get(`${this.baseUrl}/getdata`,)
}



}
