import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router';

import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private userService: UserService ,private router:Router) { }
  user={
    uname:'',
    email:'',
    password:''
  }
  ngOnInit(): void {
 
  }

  newUser()
  {    
    this.userService.registerUser(this.user);
    console.log("Called");    
    alert("Successfully registered");
    this.router.navigate(['/login']);
  }
}




