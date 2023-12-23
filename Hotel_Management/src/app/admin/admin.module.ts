import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { OwnersUpdateComponent } from './owners-update/owners-update.component';
import { HotelsUpdateComponent } from './hotels-update/hotels-update.component';
import { UsersUpdateComponent } from './users-update/users-update.component';
import {  SearchPipe2 } from './pipe/search.pipe';
import { ImgPipe } from './pipe/img.pipe';



@NgModule({
  declarations: [
    AdminLandingComponent,
    AdminSignUpComponent,
    AdminHomeComponent,
    HotelsUpdateComponent,
    UsersUpdateComponent,
    SearchPipe2,
    ImgPipe,
    OwnersUpdateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
   FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
