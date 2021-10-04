import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from '../models/items';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {
  item: Items = new Items();
  constructor(private _http:HttpClient,private _router:Router) { }

  ngOnInit(): void {
  }

  addItem() {
    this._http.post('http://localhost:3000/items', this.item).subscribe(result => {
      alert('Item Added Successfully.')
      this._router.navigate(['/admin']);
    }, error => {
      console.log(error);
    })
  }
}
