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
  Hotels:any;
  tableHeading = ['Hotel Name', 'Hotel address', 'Hotel No.','Hotel Menu','Room','Book Hotel'];
  constructor(private router:Router,private apicallservice:ApicallserviceService){}


  async showBookingDetails(){
  this.BookingDetails = await this.apicallservice.getApiCall("hotelDetails").toPromise()
      this.showtable =true;
      console.log("bookingdetails",this.BookingDetails);
 }








  hotelbooking(){
    this.router.navigateByUrl("/user/hotelbooking")
  }




}
