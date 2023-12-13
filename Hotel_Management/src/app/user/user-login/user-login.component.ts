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
  showPass:boolean=false; 
  ownerData:any;
  showpass = false;
  
  constructor(private fb:FormBuilder,private router:Router,private apiCallService: ApicallserviceService,
   ){} 
 
  ngOnInit(){ 
   this.formDetails(); 
   
  } 
 
  formDetails(){ 
  this.loginForm=this.fb.group({ 
   userName :["",[Validators.required, Validators.pattern('[a-zA-Z ]*')]], 
   password:["",[Validators.required]] 
  }) 
  } 

  showPassword() {
    this.showpass = !this.showpass
  }
  
login(){
  console.log('data', this.loginForm.value);
  
  // this.router.navigateByUrl("/user/home");
}

signup(){
  // this.router.navigateByUrl("/user/userSignup")
}
}
