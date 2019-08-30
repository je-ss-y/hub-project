import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import {environment } from '../environments/environment';
import { resolve, reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

user:User;
  constructor(private http:HttpClient) {
    this.user= new User("","",0)
   }
   userRequest(){
     interface ApiResponse{
       name:string
    }
    let promise =new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        this.user.name=response.name
        resolve()
      },
      error=>{
      this.user.name="Please enter your username"
      reject(Error)
      })
    })
    return promise
   }
}
