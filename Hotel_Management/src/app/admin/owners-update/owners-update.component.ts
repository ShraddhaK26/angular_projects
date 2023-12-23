import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallserviceService } from 'src/app/common services/apicallservice.service';

@Component({
  selector: 'app-owners-update',
  templateUrl: './owners-update.component.html',
  styleUrls: ['./owners-update.component.scss']
})
export class OwnersUpdateComponent {
  
  BookingDetails:any;
  searchText:any;
  id: any;
  ownerDetails: any;
  constructor(private router:Router,private apicallservice:ApicallserviceService){}

  ngOnInit(){
    this.showOwnerDetails();
    
  }

  async showOwnerDetails(){
  this.ownerDetails = await this.apicallservice.getApiCall("owner").toPromise()
      console.log("ownerDetails",this.ownerDetails);
 }


  

back(){
  this.router.navigateByUrl("/admin/home")
}


}
