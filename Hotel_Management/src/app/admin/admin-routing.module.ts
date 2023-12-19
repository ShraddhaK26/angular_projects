import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HotelsUpdateComponent } from './hotels-update/hotels-update.component';
import { UsersUpdateComponent } from './users-update/users-update.component';
import { OwnersUpdateComponent } from './owners-update/owners-update.component';

const routes: Routes = [
  {path:"",component:AdminLandingComponent},
  {path:"adminSignup",component:AdminSignUpComponent},
  {path:"home",component:AdminHomeComponent}, 
  {path:"hotelUpdates",component:HotelsUpdateComponent},
  {path:"ownersUpdate",component:OwnersUpdateComponent},
  {path:"usersUpdate",component:UsersUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
