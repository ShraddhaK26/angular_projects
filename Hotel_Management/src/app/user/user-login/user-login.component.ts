import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallserviceService } from 'src/app/common services/apicallservice.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  loginForm!:FormGroup;

  showWorning=true; 
  showpass:boolean=false; 
  UserData:any;
  endPoint ="user";
  pass = false;
 
  
  
  constructor(private fb:FormBuilder,private router:Router,private apiCallService: ApicallserviceService,
   ){} 
 
  ngOnInit(){ 
   this.formDetails(); 
this.UserSignUpData();
  } 
 
  formDetails(){ 
  this.loginForm=this.fb.group({ 
   userName :["",[Validators.required, Validators.pattern('[a-zA-Z ]*')]], 
   password:["",[Validators.required]] 
  }) 
  } 
 
 

  UserSignUpData(){
    let endPoint ="user";
   this.apiCallService.getApiCall(endPoint).subscribe(res=>{
    this.UserData = res;
    console.log("userdata",this.UserData);
    
   })}

login(){
  
  if(this.UserData){
    var matchedObj= this.UserData.find((item:any)=>{
    if(item.fname == this.loginForm.value.userName && item.password == this.loginForm.value.password){
       return item;
      
     }
     
     })
 
   if(matchedObj){
    console.log(this.loginForm.value);
    this.apiCallService.userName=this.loginForm.value.userName;
     this.router.navigateByUrl("/user/home");
   }
   else{
     this.router.navigateByUrl('');
   }
 }
 
}

hidepass() {
  this.pass = !this.pass;
}



signup(){
  // this.router.navigateByUrl("/user/userSignup")
}
ForgetPass(){
  this.router.navigateByUrl("/user/forgetPassword")
}
}
