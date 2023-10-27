import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  
  constructor(private _AuthService :AuthService ,private _Router :Router)
   { 

   }

   registerForm : FormGroup = new FormGroup({
    Name : new FormControl(null,[Validators.required , Validators.maxLength(20),Validators.minLength(3)]),
    Phone : new FormControl(null,[Validators.required , Validators.min(3)]),
    NationalId : new FormControl(null,[Validators.required , Validators.min(14)]),
    Gender : new FormControl(null,[Validators.required ]),
    Email : new FormControl(null,[Validators.required , Validators.email]), 
    Password:new FormControl(null,[Validators.minLength(3), Validators.required ])
   });

   error : string =''; 
   SubmitRegisterForm(form : FormGroup )
   {
     this._AuthService.SignUp(form.value).subscribe({
       next:(response)=>{
         if(response.message === 'success')
         {
           this._Router.navigate(['/home']);
         }
         else{
           this.error = response.message;
         }
       }
     });
   }


}
