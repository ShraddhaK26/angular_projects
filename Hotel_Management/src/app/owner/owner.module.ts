import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerlandingComponent } from './ownerlanding/ownerlanding.component';
import { SharedModule } from '../shared/shared.module';
import { OwnerSignupComponent } from './owner-signup/owner-signup.component';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';
import { HotelRegistrationComponent } from './hotel-registration/hotel-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipe/search.pipe';
import { HotelListComponent } from './hotel-list/hotel-list.component';




@NgModule({
  declarations: [
    OwnerlandingComponent,
    OwnerSignupComponent,
    OwnersuccessComponent,
    HotelRegistrationComponent,
    SearchPipe,
    HotelListComponent,
 
    
   
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class OwnerModule { }
