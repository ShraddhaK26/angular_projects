import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { Shared2Module } from './shared2/shared2.module';

import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { UserSucessComponent } from './user-sucess/user-sucess.component';
import { SearchHotelPipe } from './pipe/search-hotel.pipe';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';





@NgModule({
  declarations: [
    UserSucessComponent,
    HotelBookingComponent,
    SearchHotelPipe,
    UserLoginComponent,
    UserSignupComponent,
   
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    Shared2Module,
    
  ]
})
export class UserModule { }
