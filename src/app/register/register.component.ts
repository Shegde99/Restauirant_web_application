import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public signupForm!:FormGroup;
   user:User=new User();
  constructor(private _router:Router,private _http:HttpClient,private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.signupForm= this._formBuilder.group(
      {
        username:['',Validators.required],
        email:['',Validators.required],
        contact:['',Validators.required],
        password:['',Validators.required]
      }
    )
  }
    signUp()
    {
       this._http.post<any>(`http://localhost:3000/user`,this.signupForm.value).subscribe(result=>
       {
         alert('sign up successful!');
         this.signupForm.reset();
         this._router.navigate(['login']);
       },
       error=>
       {
         console.log(error);
         
       })
      
     
       
    }
}
