import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallserviceService } from 'src/app/common services/apicallservice.service';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.scss']
})
export class UsersUpdateComponent {
  searchText:any;
  usersUpdateData: any;

  constructor(private router:Router,private apicallservice:ApicallserviceService){}




ngOnInit(){
  this.usersUpdateDetails();
}

async usersUpdateDetails(){
  this.usersUpdateData=await this.apicallservice.getApiCall("user").toPromise()
  console.log("userUpdateDetails",this.usersUpdateData);
  
}


  back(){
    this.router.navigateByUrl("/admin/home")
  }
}
