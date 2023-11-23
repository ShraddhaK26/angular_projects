import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerlandingComponent } from './ownerlanding/ownerlanding.component';

const routes: Routes = [
  {path:"ownerlogin", component:OwnerlandingComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
