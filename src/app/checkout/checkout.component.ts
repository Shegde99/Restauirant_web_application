import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public item:any=[];
  public grandTotal!:number;
  constructor(private _cart:CartService,private _route:Router) { }

  ngOnInit(): void {
    this._cart.getItems().subscribe(result=>
      {
        this.item=result;
        this.grandTotal=this._cart.getTotalPrice();
      })
  }

  payment()
  {
    alert('Order successfull');
    alert('Amount Paid Successfully');
  
    this._route.navigate(['home']);

  }
}
