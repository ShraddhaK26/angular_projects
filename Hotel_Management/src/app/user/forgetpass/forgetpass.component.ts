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
 
 

  constructor(private fb: FormBuilder, private router: Router, private apiCallService: ApicallserviceService) { }
  showpass:boolean=true;
  showpass1:boolean=true;
  showpass2:boolean=true;
  showForgotDiv:boolean=false;
  matcherr:boolean=false;
  endPoint='user';
  signupData:any;
  adminName:any;
  password:any;
  loginFail:boolean=false
  ownerRecordByEmail:any=[];
  changePassForm!:FormGroup;
  ownerId:any;
  changeConPass:any




ngOnInit(){
  this.getDataFromSignup();
  this.forgotData();
}

 async getDataFromSignup(){
  this.signupData= await this.apiCallService.getApiCall(this.endPoint).toPromise()

}
forgotData(){
  this.changePassForm=this.fb.group({

   
    // pan:[this.ChangePan],
    email:['',[Validators.pattern('[a-zA-z0-9]*+@+[a-z]{2,6}+/.+[a-z]{2,4}')]],
    password:[''],
    // conpassword:[...this.pass],
    // gender:[this.ChangeGender]
  

  })

}




checkEmail(){
  
  this.signupData.forEach((ele:any) => {
   if(this.changePassForm.value.email==ele.email){
    this.ownerRecordByEmail.push(ele)
   }
console.log(this.ownerRecordByEmail);

  })


 

 
  
}
changePassword(){

  console.log(this.changePassForm.value);
  
  this.ownerRecordByEmail.forEach((ele:any) => {
 this.ownerId=ele.id
 
 
 
  });

 
this.apiCallService.patchApiCall(this.endPoint,this.ownerId,this.changePassForm.value).subscribe(res=>{
   
   alert('update')
     })
}


  backBtn(){
    this.router.navigateByUrl('')
  }
  divForgot(){
    this.showForgotDiv=!this.showForgotDiv
  }
  forsubmit(data:any){
    console.log(data);
    
  }
  goLoginPage(){
    this.showForgotDiv=!this.showForgotDiv
  }
  hidepass() {
    this.pass = !this.pass;
  }
  hideconpass() {
    this.conpass = !this.conpass
  }
 
}
 

  



 
  

