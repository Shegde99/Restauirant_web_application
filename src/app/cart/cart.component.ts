import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public item:any=[];
  public grandTotal!:number;
  constructor(private _cart:CartService) { }

  ngOnInit(): void {
    this._cart.getItems().subscribe(result=>
      {
        this.item=result;
        this.grandTotal=this._cart.getTotalPrice();
      })
  }
  removeItem(item:any)
  {
     this._cart.removeCartItem(item);
  }
  emptyCart()
  {
    this._cart.removeAllCart();
  }
}
