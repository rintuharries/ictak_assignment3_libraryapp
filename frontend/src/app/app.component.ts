import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title:String="Library App";
  constructor(public _auth:AuthService,
    private _router:Router){}

 
  logoutUser()
  {
  localStorage.removeItem('token')
  this._router.navigate(['/books'])
  
  }
  loggedUsera()
  {
    
    this._router.navigate(['/addauthor'])
  }
  loggedUserb()
  {
    
    this._router.navigate(['/addbook'])
  }

  }