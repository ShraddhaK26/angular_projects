import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { OwnersUpdateComponent } from './owners-update/owners-update.component';



@NgModule({
  declarations: [
    AdminLandingComponent,
    AdminSignUpComponent,
    AdminHomeComponent,
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
