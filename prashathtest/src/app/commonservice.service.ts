import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  apiurl = "http://localhost:3000/"

  constructor(private http:HttpClient) { 

  }

  register(obj){
    return this.http.post(this.apiurl+'register', obj);
  }

  login(obj){
    return this.http.post(this.apiurl+'login', obj);
  }



}
