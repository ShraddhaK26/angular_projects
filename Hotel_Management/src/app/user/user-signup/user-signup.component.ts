import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallserviceService } from 'src/app/common services/apicallservice.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent {
  SignUpForm!:FormGroup;

  showWorning=true; 
  pass = false;
  conpass = false;
  endPoint: string = "user";
  showpass: boolean=true;

  
  constructor(private fb:FormBuilder,private router:Router,private apiCallService: ApicallserviceService,
   ){} 
 
  ngOnInit(){ 
   this.formDetails(); 
   
  } 
 
  formDetails(){ 
  this.SignUpForm=this.fb.group({ 
   fname :["",[Validators.required, Validators.pattern('[a-zA-Z ]*')]], 
   lname :["",[Validators.required, Validators.pattern('[a-zA-Z ]*')]], 
   email: ['', [Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
   password:["",[Validators.required]] ,
   Conpassword:["",[Validators.required]] 
  }) 
  } 

  
  hidepass() {
    this.pass = !this.pass;
  }
  hideconpass() {
    this.conpass = !this.conpass
  }
  
  showPassword() {
    this.showpass = !this.showpass
  }
login(){
  console.log('data', this.SignUpForm.value);
  this.apiCallService.postApiCall(this.endPoint, this.SignUpForm.value).subscribe(response => {
    console.log("res>>",response);
    if(response){
      alert('Data submitted Successfuly...!!');
      this.router.navigateByUrl('user');
      
    }
  })
}













  back(){
    this.router.navigateByUrl(" ")
  }
}
