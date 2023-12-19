import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSucessComponent } from './user-sucess/user-sucess.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';

const routes: Routes = [
 {path : "", component:UserLoginComponent},
  {path:"home",component:UserSucessComponent},
  {path:"userSignup", component:UserSignupComponent},
  {path:"forgetPassword", component:ForgetpassComponent},
 {path:"hotelBooking" , component:HotelBookingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
