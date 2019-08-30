import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repo } from './repo';

import {environment } from '../environments/environment';
import { resolve, reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

user:User;
repo:any;
  constructor(private http:HttpClient) {
    this.user= new User("","",0)
   }
   userRequest(id){
     interface ApiResponse{
      login:string;
       avatar_url:string;
       id:number
    }
    let promise =new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/'+ id+'?access_token=' +environment.apiUrl).toPromise().then(response=>{
        this.user.name=response.login
        this.user.avatar=response.avatar_url
        console.log(this.user)
        resolve()
      },
      error=>{
      this.user.name="Please enter your username"
      reject(Error)
      })
    })
    return promise
   }
   reporequest(){
     this.http.get("https://api.github.com./users" + this.user+"/repo? apiUrl"+this.repo);
   }
//    reporequest(){
//     interface ApiResponse{
//               Name:string;
//               email:string;
//               follow:string;
//               repo:string;
 
//     }

//  }
}
