import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallserviceService } from 'src/app/common services/apicallservice.service';

@Component({
  selector: 'app-hotels-update',
  templateUrl: './hotels-update.component.html',
  styleUrls: ['./hotels-update.component.scss']
})
export class HotelsUpdateComponent {

  searchText:any;
  endPoint="hotelDetails";
  registerData:any;
  userName:any;
  hotelList :any= [];
  hoteData: Object | undefined;
  
  
    constructor(private apiCallService:ApicallserviceService,private router:Router){}
    ngOnInit(){
     
      
      this.getDataFromRegister()
      
       
    }
    


    
   async getDataFromRegister(){
    this.hoteData=  await this.apiCallService.getApiCall(this.endPoint).toPromise()
    console.log("hoteData" , this.hoteData);
    
        

      
     
    }
    
    back(){
      this.router.navigateByUrl('/admin/home')
    }

   


  
    delete(id:any){
    console.log("id" ,id);
    this.apiCallService.deleteApiCall("hotelDetails", id).subscribe(res=>{})
    this.getDataFromRegister();
    
    }}

   
  
  

