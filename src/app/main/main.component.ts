import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private _router: any;
  public totalItem:number=0;
  public searchTerm !:string;


  constructor(private _cart:CartService, private _authservice:AuthService) { }

  ngOnInit(): void {
    this.checkLoginStatus();
    this._cart.getItems().subscribe(result=>
      {
        this.totalItem=result.length;
      })
  }
 search(event:any)
 {
   this.searchTerm=(event.target as HTMLInputElement).value;
   console.log(this.searchTerm);
   this._cart.search.next(this.searchTerm);
   
 }
 checkLoginStatus() {
  if (this._authservice.isLoggedIn())
    return true;
  return false;
}
logout() {
  this._authservice.logout();
  this._router.navigate(['/home']);
}
}
