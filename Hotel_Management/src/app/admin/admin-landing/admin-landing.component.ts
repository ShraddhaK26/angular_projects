import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallserviceService } from 'src/app/common services/apicallservice.service';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.scss']
})
export class AdminLandingComponent {

  adminLoginForm!:FormGroup;
  showWorning=true; 
  showpass:boolean=false; 
  adminData:any;
  endPoint ="admin";
  pass = false;
 
  
  
  constructor(private fb:FormBuilder,private router:Router,private apiCallService: ApicallserviceService,
   ){} 
 
  ngOnInit(){ 
   this.formDetails(); 
this.adminSignUpData();
  } 
 
  formDetails(){ 
  this.adminLoginForm=this.fb.group({ 
   userName :["",[Validators.required, Validators.pattern('[a-zA-Z ]*')]], 
   password:["",[Validators.required]] 
  }) 
  } 
 
 

  adminSignUpData(){
    let endPoint ="admin";
   this.apiCallService.getApiCall(endPoint).subscribe(res=>{
    this.adminData = res;
    console.log("adminData",this.adminData);
    
   })}

login(){
  
  if(this.adminData){
    var matchedObj= this.adminData.find((item:any)=>{
    if(item.userName == this.adminLoginForm.value.userName && item.password == this.adminLoginForm.value.password){
       return item;
      
     }
     
     })
 
   if(matchedObj){
    console.log(this.adminLoginForm.value);
    this.apiCallService.userName=this.adminLoginForm.value.userName;
     this.router.navigateByUrl("/admin/home");
   }
   else{
     this.router.navigateByUrl("/admin");
   }
 }
 
}

hidepass() {
  this.pass = !this.pass;
}



signup(){
   this.router.navigateByUrl("/admin/adminSignup")
}

}

