import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { Items } from '../models/items';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  itemList: Array<Items> = [];
  searchKey:string="";
  public filterCategory:any;
  constructor(private _http:HttpClient,private _cart:CartService) { }

  ngOnInit(): void {
  this._http.get<any>(`http://localhost:3000/items`).subscribe(result=>
  {
    this.itemList=result;
    this.filterCategory=result;
    this.itemList.forEach((a:any)=>
    {
     
     Object.assign(a,{quantity:1,total:a.price});
    });
  })
  this._cart.search.subscribe((result:any)=>
    {
      this.searchKey=result;
    })
}

   addtoCart(item:any)
    { 
         this._cart.addtoCart(item);
    }

    filter(category:string)
    {
      this.filterCategory=this.itemList.filter((a:any)=>
      {
        if(a.category== category || category=='')
        return a;
      });
    }
}
