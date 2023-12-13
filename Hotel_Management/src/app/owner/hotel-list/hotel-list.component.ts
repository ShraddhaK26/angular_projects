import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallserviceService } from 'src/app/common services/apicallservice.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent {
  endPoint="hotelDetails";
  searchText:any;
  registerData:any;
  userName:any;
  hotelList :any= [];
  
  
    constructor(private apiCallService:ApicallserviceService,private router:Router){}
    ngOnInit(){
      this.userName=this.apiCallService.userName;
      console.log("username" , this.userName);
      
      this.getDataFromRegister()
      
       
    }
    

    tableHeading = ['Hotel Name', 'Hotel address', 'Hotel No.','Hotel Menu','Room','Edit','Delete'];
    
   async getDataFromRegister(){
    this.registerData=  await this.apiCallService.getApiCall(this.endPoint).toPromise()
    this.registerData.forEach((item:any)=> {
if (this.userName==item.userName) {
  this.hotelList.push(item);
}
    
    })
        

      
     
    }
    
    back(){
      this.router.navigateByUrl('Osucess')
    }

    edit(id:any){
      let IdRecord:any= [];
console.log("id" ,id);
this.registerData.forEach((item:any) => {
  if(item.id == id){
    IdRecord.push(item)
  }
})
console.log("record",IdRecord);
this.apiCallService.IdRecord=IdRecord;
this.apiCallService.id=id;
this.router.navigateByUrl('owner/HotelReg');



    }
    delete(id:any){
    console.log("id" ,id);
    this.apiCallService.deleteApiCall("hotelDetails", id).subscribe(res=>{})
    this.getDataFromRegister();
    
    }

   
  
  }

