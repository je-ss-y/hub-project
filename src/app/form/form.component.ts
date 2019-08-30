import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  try:string;
  
  fun(tryer){
    this.router.navigate(['/about',tryer])
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
