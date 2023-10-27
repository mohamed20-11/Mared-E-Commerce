import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService :AuthService ,private _Router :Router)
   {

   }

   loginForm : FormGroup = new FormGroup({
    Email : new FormControl(null,[Validators.required , Validators.email]),
    Password:new FormControl(null,[Validators.minLength(3), Validators.required ])
  })

  error : string ='';
  SubmitLoginForm(form : FormGroup )
  {
    this._AuthService.SignIn(form.value).subscribe({
      next:(response)=>{
        if(response.message === 'success')
        {
          localStorage.setItem('token', "test");
          this._AuthService.saveUserData()
          this._Router.navigate(['/home']);
        }
        else{
          this.error = response.message;
        }
      }
    });
  }


  ngOnInit() {

  }
}
