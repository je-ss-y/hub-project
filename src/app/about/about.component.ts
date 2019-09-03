import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from '../user';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import {Repo} from '../repo';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  repovar:Repo[];

  userr:User;

  constructor( private route:ActivatedRoute ,private profileservice:ProfileService) {
    
    
   }

  ngOnInit() {
    let ok = this.route.snapshot.paramMap.get('try');
    this.profileservice.userRequest(ok)
    this.profileservice.repoRequest(ok)
      // this.repos=repos;
    this.userr=this.profileservice.user
    this.repovar=this.profileservice.repo
  }

}
