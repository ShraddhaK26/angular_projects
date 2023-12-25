import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallserviceService } from 'src/app/common services/apicallservice.service';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.scss']
})
export class ForgetpassComponent {
  forgetForm!:FormGroup;


  pass = false;
  conpass = false;
  endPoint: string = "user";
  userData: any;
  userRecordByEmail:any=[];
  changePassForm!:FormGroup;
  userId: any;
 
 

  constructor(private fb: FormBuilder, private router: Router, private apiCallService: ApicallserviceService) { }
  ngOnInit() {
    this.signupData();
    this.UserSignUpData();
  }
  signupData() {
    this.forgetForm = this.fb.group({

      email: ['', [Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.maxLength(15)]],

    
    })
  }

  UserSignUpData(){
    let endPoint ="user";
   this.apiCallService.getApiCall(endPoint).subscribe(res=>{
    this.userData = res;
    console.log("userdata",this.userData);
    
   })}


  resetPass(){
    console.log(this.changePassForm.value);
  
  this.userRecordByEmail.forEach((ele:any) => {
 this.userId=ele.id
 
 
 
  });

 
this.apiCallService.patchApiCall(this.endPoint,this.userId,this.changePassForm.value).subscribe(res=>{
   
   alert('update')
     })
}

  checkEmail(){
    this.userData.forEach((ele:any) => {
      if(this.changePassForm.value.email==ele.email){
       this.userRecordByEmail.push(ele)
      }
   console.log(this.userRecordByEmail);
   
     })
    
   
   
    
   
    
  }


  hidepass() {
    this.pass = !this.pass;
  }
  hideconpass() {
    this.conpass = !this.conpass
  }
 
  
}
