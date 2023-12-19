import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallserviceService } from 'src/app/common services/apicallservice.service';

@Component({
  selector: 'app-user-sucess',
  templateUrl: './user-sucess.component.html',
  styleUrls: ['./user-sucess.component.scss']
})
export class UserSucessComponent {
  showtable=false;
  BookingDetails:any;
  searchText:any;
  id: any;
  showList:boolean=false;
  constructor(private router:Router,private apicallservice:ApicallserviceService){}

  ngOnInit(){
    this.id=this.apicallservice.id;
  }

  async showBookingDetails(){
  this.BookingDetails = await this.apicallservice.getApiCall("hotelDetails").toPromise()
      this.showList =!this.showList;
      console.log("bookingdetails",this.BookingDetails);
 }








  hotelbooking(){
    this.router.navigateByUrl("/user/hotelBooking")
  }




}
