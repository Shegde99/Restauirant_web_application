import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  public loginForm!:FormGroup;
  user: User = new User(); 
  constructor(private _router: Router,private _http:HttpClient, private _formBuilder:FormBuilder) { }
 
  ngOnInit(): void {
    this.loginForm=this._formBuilder.group(
      {
        email:['',Validators.required],
        password:['',Validators.required]
      }
    )
   }
 
   login()
   {
     this._http.get<any>(`http://localhost:3000/user`).subscribe(result=>
     {
       const user=result.find((a:any)=>
       {
       
         return a.email==this.loginForm.value.email && a.password==this.loginForm.value.password
         
       });
       if(user)
       {
        localStorage.setItem('isLoggedIn', 'true');
       alert('login successfull!!');
       this.loginForm.reset();
       this._router.navigate(['home']);
       }
       else
       {
        alert('user not found');
        this.loginForm.reset();
       }
     },
     error=>
     {
       alert('something went wrong (:');
     })
   }
}


