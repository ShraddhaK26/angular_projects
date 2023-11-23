import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerlandingComponent } from './ownerlanding/ownerlanding.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    OwnerlandingComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
  ]
})
export class OwnerModule { }
