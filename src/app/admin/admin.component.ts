import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 itemList:any;
  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
    this._http.get('http://localhost:3000/items').subscribe(result => {
      this.itemList = result;
      console.log(this.itemList);
    }, error => {
      console.log(error);
    })
  }

}
