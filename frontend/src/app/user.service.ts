import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  item={
  uname:'',
  email:'',
  password:''
  }
 server_address:string='/api'

  registerUser(user:any){
    return this.http.post("http://localhost:3000/register",{"item":user})
  }

}
