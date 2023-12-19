import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallserviceService } from 'src/app/common services/apicallservice.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.scss']
})
export class HotelBookingComponent {

  hotelbooking! : FormGroup;
  age = 20;
  todayDate = new Date();
  userAge: any;
  datePattern = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
  isGenderSelected:boolean=true
  pass=true;
  endPoint: string = "HotelBooking";
  constructor( public fb : FormBuilder,private router:Router,public apicallservice:ApicallserviceService){}

  
  ngOnInit(){
   this.formDetails();
   console.log(this.hotelbooking,);

    
  }
  foods: Food[] = [
    { value: 'net-banking', viewValue: 'Net-Banking' },
    { value: 'upi', viewValue: 'UPI' },
    { value: 'qr', viewValue: 'QR' },
  ];

  formDetails(){
    this.hotelbooking = this.fb.group({
      userName : ['',[Validators.maxLength(20),Validators.minLength(5),Validators.pattern('[a-zA-Z ]+')]],
      email:[,[Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      mobNo:['',[Validators.pattern('[0-9+]*')]],
     dob:['',[Validators.pattern(this.datePattern)]],
     payment:[''],
     gender:[''],
     pancard:['',[Validators.pattern('[A-Z 1-9]*')]],
     city:['',[Validators.pattern('[a-zA-Z ]+')]]
    
    })
  }
  
  submit(){
    let gender = this.hotelbooking.value.gender
    if(gender){
      console.log('gender value',this.hotelbooking.value);
    }
    else{
      this.isGenderSelected=false
      return
    }
    this.apicallservice.postApiCall(this.endPoint,this.hotelbooking.value).subscribe(response => {
      console.log("res>>",response);
      if(response){
        alert('Data submitted Successfuly...!!');
        this.router.navigateByUrl('user/home');
        
      }
  })

}
  gender(){
    this.isGenderSelected = true;

  }
  back(){
    this.router.navigateByUrl('user/home');
  }


  }
