import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})




export class AuthService {

  userDataSubject: BehaviorSubject<LoggedUser|null>

  constructor(private _httpClient: HttpClient, _router: Router) {
    this.userDataSubject = new BehaviorSubject<LoggedUser|null>(this.GetLoggedInUser())
  }
  saveUserData() {
    this.userDataSubject.next(this.GetLoggedInUser());
  }
  GetLoggedInUser(): LoggedUser|null{
    if(localStorage.getItem('token') != null){
      let temp : LoggedUser = {
        name:"",
        token:localStorage.getItem('token')??"",
        picture:""
      }
      return temp
    }
    else{
      return null;
    }
  }

  SignUp(userData : object):Observable<any>
  {
    console.log(userData);
    return this._httpClient.post('??',userData);
  }

  SignIn(userData : object):Observable<any>
  {
    console.log(userData);
    return this._httpClient.post('??',userData);
  }
}




export interface LoggedUser{
  name:string;
  token :string;
  picture :string;
}
