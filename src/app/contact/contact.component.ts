import { Component, OnInit } from '@angular/core';
import { Visitor } from '../models/visitor';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  visitor: Visitor = new Visitor();
  submitted: boolean = false;
  contactForm!: FormGroup;
  constructor(private _formBuilder: FormBuilder,private _http:HttpClient,private _router:Router) { }
 
  ngOnInit(): void {
    this.contactForm= this._formBuilder.group(
      {
        name:['',Validators.required],
        email:['',Validators.required],
        contact:['',Validators.required]
      }
    )
  }
    addContact()
    {
       this._http.post<any>(`http://localhost:3000/visitor`,this.contactForm.value).subscribe(result=>
       {
         alert('contact added successfully!');
         this.contactForm.reset();
         this._router.navigate(['/home']);
       },
       error=>
       {
         console.log(error);
         
       })
       
    }
}
