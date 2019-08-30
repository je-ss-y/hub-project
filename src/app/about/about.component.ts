import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from '../user';
import {  ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  repovar:string;

  userr:User;

  constructor( private route:ActivatedRoute ,private profileservice:ProfileService) {
    
    
   }

  ngOnInit() {
    let ok = this.route.snapshot.paramMap.get('try');
    this.profileservice.userRequest(ok)
      // this.repos=repos;
    this.userr=this.profileservice.user
  }

}
