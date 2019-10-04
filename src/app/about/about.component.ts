import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

import {  ActivatedRoute, ParamMap } from '@angular/router';
import {Repo} from '../repo';
import {Account} from '../account';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  repos:Repo[];

  acc:Account;

  constructor( private route:ActivatedRoute ,private profileservice:ProfileService) {
            
    
    
   }


  //  export class ProfileComponent implements OnInit {
  //   profile:any;
  //   repos:any;
  //   username:string;
    
  //     constructor(private profileService:ProfileService) { 
      
  //       this.profileService.getProfileInfo().subscribe(profile => {
  //         console.log(profile);
  //         this.profile = profile;
  //       });
    
  //       this.profileService.getProfileRepos().subscribe(repos => {
  //         console.log(repos);
  //         this.repos = repos;
  //       })  	
  //     }

  ngOnInit() {
    let ok = this.route.snapshot.paramMap.get('try');
    this.profileservice.userRequest(ok)
    this.acc=this.profileservice.acc;
    let yes=this.route.snapshot.paramMap.get('repos')
    this.profileservice.repoRequest(ok)
    this.repos=[];
   
    this.repos=this.profileservice.repos;
  }

}
