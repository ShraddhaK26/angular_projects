import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallserviceService } from 'src/app/common services/apicallservice.service';

@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.scss']
})
export class AdminSignUpComponent {
  adminSignUpForm!:FormGroup;

  showWorning=true; 
  pass = false;
  conpass = false;
  endPoint: string = "admin";
  showpass: boolean=true;

  
  constructor(private fb:FormBuilder,private router:Router,private apiCallService: ApicallserviceService,
   ){} 
 
  ngOnInit(){ 
   this.formDetails(); 
   
  } 
 
  formDetails(){ 
  this.adminSignUpForm=this.fb.group({ 
    userName :["",[Validators.required, Validators.pattern('[a-zA-Z ]*')]], 
   email: ['', [Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
   password:["",[Validators.required]] ,
 
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
  Submit(){
  console.log('data', this.adminSignUpForm.value);
  this.apiCallService.postApiCall(this.endPoint, this.adminSignUpForm.value).subscribe(response => {
    console.log("res>>",response);
    if(response){
      alert('Data submitted Successfuly...!!');
      this.router.navigateByUrl("admin");
      
    }
  })
}
}
