import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallserviceService } from 'src/app/common services/apicallservice.service';

@Component({
  selector: 'app-hotel-registration',
  templateUrl: './hotel-registration.component.html',
  styleUrls: ['./hotel-registration.component.scss']
})
export class HotelRegistrationComponent {
  newHotelRegister!:FormGroup 
  endPoint: any = "HotelDetails";
  userName:any;
  IdRecord: any;
  id: any;
  new: any;
  
  constructor(private fb:FormBuilder ,
    private apiCallService:ApicallserviceService,
    private router:Router){} 
    
ngOnInit(){ 
 this.userName=this.apiCallService.userName;
 this.IdRecord=this.apiCallService.IdRecord;
 console.log(this.IdRecord,this.IdRecord);
 this.id=this.apiCallService.id;
 this.new = this.apiCallService.new
  this.formDetails() 
} 
 
formDetails(){ 
  this.newHotelRegister=this.fb.group({ 
    Hmail:[ this.IdRecord ? this.IdRecord[0]?.Hmail:'',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]], 
    Oname:[this.IdRecord ? this.IdRecord[0]?.Oname:'',[Validators.required,Validators.pattern('[a-zA-Z ]*')]], 
    ono:[this.IdRecord ? this.IdRecord[0]?.ono:'',[Validators.required,Validators.maxLength(10), Validators.pattern('[0-9+]*')]], 
    mobileNumber: [this.IdRecord ? this.IdRecord[0]?.mobileNumber:'', [Validators.required, Validators.pattern('[0-9+]*')]], 
    Hname:[ this.IdRecord ? this.IdRecord[0]?.Hname :'',Validators.required], 
    Hadd:[this.IdRecord ? this.IdRecord[0]?.Hadd:'',Validators.required], 
    HNo:[this.IdRecord ? this.IdRecord[0]?.HNo:'',[Validators.required,Validators.maxLength(10), Validators.pattern('[0-9+]*')]], 
    Hmenu:[this.IdRecord ? this.IdRecord[0]?.Hmenu:'',Validators.required], 
    room:[this.IdRecord ? this.IdRecord[0]?.room:'',Validators.required], 
    rp:[this.IdRecord ? this.IdRecord[0]?.rp:'',Validators.required], 
    // gender:['',Validators.required], 
    // userName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]], 
    Hw: [this.IdRecord ? this.IdRecord[0]?.Hw:'', [Validators.required, Validators.minLength(8)]], 
    HotelRating:[this.IdRecord ? this.IdRecord[0]?.HotelRating:'',Validators.required] ,
    img:[''],
    userName:[this.userName]
  })  
} 
 
 
newHotelRegistration(){ 
  let endPoint = "hotelDetails";
  console.log(this.newHotelRegister.value); 
  this.apiCallService.postApiCall(endPoint,this.newHotelRegister.value).subscribe(res=>{ 
    console.log("responce::>>",res); 
   // if(res){ 
      alert('Hotel registered Successfuly...!!'); 
      this.router.navigateByUrl('Osucess'); 
   // } 
  }) 
}

update(){
  
  
 this.apiCallService.patchApiCall("hotelDetails",this.id,this.newHotelRegister.value).subscribe((responce:any)=>{
  if(responce){ 
    alert('Hotel registered Successfuly...!!');
  this.router.navigateByUrl("Osucess");
  }
  })
}



ngOnDestroy(){
  console.log("destroy");
  this.apiCallService.new = false;
  this.apiCallService.IdRecord=[];
  
}
back(){
  this.router.navigateByUrl('Osucess')
}
}

