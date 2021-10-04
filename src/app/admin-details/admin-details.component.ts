import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Items } from '../models/items';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  id: any;
  item: Items = new Items();
  constructor(private _http:HttpClient,private _router:Router,private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._http.get<Items>(`http://localhost:3000/items/${this.id}`).subscribe(result => {
      this.item = result;
    }, error => {
      console.log(error);
    })
  }

  removeItem() {
    this._http.delete(` http://localhost:3000/items/${this.id}`).subscribe(result => {
      alert('Item removed Successfully.')
      this._router.navigate(['/admin']);
    }, error => {
      console.log(error);
    })
  }



}
