import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Repo } from './repo';
import { Account } from './account';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  acc: Account;
  // acc:User;
  repos: Repo[];
  constructor(private http: HttpClient) {
    this.acc = new Account("", "", "", "", 0, 0,new Date(2020,3,14));
    this.repos = [];
  }
  userRequest(input) {
    interface ApiResponse {

      name: string,
      login: string,
      avatar_url: string,
      html_ulr: string,
      followers: number,
      following: number,

    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + input + '?access_token=' + environment.apiUrl).toPromise().then(response => {
        this.acc.name = response.name
        this.acc.login = response.login
        this.acc.html_ulr = response.html_ulr
        this.acc.followers = response.followers
        this.acc.following = response.following
        this.acc.avatar_url = response.avatar_url
        console.log(input)
        resolve()
      },
        error => {
          this.acc.name = "Please enter your username"
          reject(Error)
        })
    })
    return promise
  }
  repoRequest(input) {
    interface ApiResponse {
      name: string;
      description: string;
      language: string;

    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + input + '/repos?access_token=' + environment.apiUrl).toPromise().then(response => {
        for (var i in response) {
          this.repos.push(response[i]);
          console.log(this.repos);
         
          

        }
        resolve()
      },
        error => {

          reject(Error)
        })
    })
    return promise
  }
}