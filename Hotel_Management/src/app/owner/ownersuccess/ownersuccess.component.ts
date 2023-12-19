import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallserviceService } from 'src/app/common services/apicallservice.service';

@Component({
  selector: 'app-ownersuccess',
  templateUrl: './ownersuccess.component.html',
  styleUrls: ['./ownersuccess.component.scss']
})
export class OwnersuccessComponent {

  constructor(private fb:FormBuilder ,
    private apiCallService:ApicallserviceService,
    private router:Router){} 

  new(){
    this.apiCallService.new = true;
  }
}
