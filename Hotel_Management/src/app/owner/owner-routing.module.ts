import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerlandingComponent } from './ownerlanding/ownerlanding.component';
import { OwnerSignupComponent } from './owner-signup/owner-signup.component';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';
import { HotelRegistrationComponent } from './hotel-registration/hotel-registration.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';

const routes: Routes = [
  {path:"", component:OwnerlandingComponent},
   {path:"ownersignup", component: OwnerSignupComponent},
   {path:"Osucess", component :  OwnersuccessComponent},
   {path:"HotelReg",component:HotelRegistrationComponent},
   {path:"list",component:HotelListComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
