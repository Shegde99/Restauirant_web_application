import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';


const routes: Routes = [
 {path:'',redirectTo:'home',pathMatch:"full"},
 {path:'home',component:HomeComponent},
 {path:'about',component:AboutComponent,canActivate: [AuthService] },
 {path:'contact',component:ContactComponent,canActivate: [AuthService] },
 {path:'dashboard',component:DashboardComponent,canActivate: [AuthService] },
 {path:'login',component:LoginComponent},
 {path:'register',component:RegisterComponent},
 {path:'cart',component:CartComponent,canActivate: [AuthService] },
 {path:'checkout',component:CheckoutComponent,canActivate: [AuthService] },
 {path:'admin',component:AdminComponent,},
 {path:'admin-add',component:AdminAddComponent},
 {path:'admin-details/:id',component:AdminDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
