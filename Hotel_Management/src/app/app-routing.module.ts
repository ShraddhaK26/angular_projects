import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { OwnerSignupComponent } from './owner/owner-signup/owner-signup.component';
import { OwnersuccessComponent } from './owner/ownersuccess/ownersuccess.component';
import { HotelRegistrationComponent } from './owner/hotel-registration/hotel-registration.component';
import { HotelListComponent } from './owner/hotel-list/hotel-list.component';

const routes: Routes = [
  {path : "" , component:LandingComponent},
  {path:"ownersignup", component: OwnerSignupComponent},
  {path:"Osucess", component :  OwnersuccessComponent},
  {path:"HotelReg",component:HotelRegistrationComponent},
  {path:"list",component:HotelListComponent},
  {path: "admin", loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},
  {path:"owner", loadChildren:()=>import('./owner/owner.module').then(mod=>mod.OwnerModule)},
  {path:"user",loadChildren:()=>import('./user/user.module').then(mod=>mod.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
