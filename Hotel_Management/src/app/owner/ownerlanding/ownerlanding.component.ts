import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallserviceService } from 'src/app/common services/apicallservice.service';

@Component({
  selector: 'app-ownerlanding',
  templateUrl: './ownerlanding.component.html',
  styleUrls: ['./ownerlanding.component.scss']
})
export class OwnerlandingComponent {
  loginForm!:FormGroup;

  showWorning=true; 
  showPass:boolean=false; 
  ownerData:any;
  showpass = false;
  
  constructor(private fb:FormBuilder,private router:Router,private apiCallService: ApicallserviceService,
   ){} 
 
  ngOnInit(){ 
   this.formDetails(); 
   this.getOwnerData();
  } 
 
  formDetails(){ 
  this.loginForm=this.fb.group({ 
   userName :["",[Validators.required, Validators.pattern('[a-zA-Z ]*')]], 
   password:["",[Validators.required]] 
  }) 
  } 
   
  
  
 
 
 getOwnerData(){
    let endPoint ="owner";
   this.apiCallService.getApiCall(endPoint).subscribe(res=>{
    this.ownerData = res;
    console.log("ownerdata",this.ownerData);
    
   })
 
 }
 
 showPassword() {
   this.showpass = !this.showpass
 }
 
 login(){
  if(this.ownerData){
    var matchedObj= this.ownerData.find((item:any)=>{
    if(item.fname == this.loginForm.value.userName && item.password == this.loginForm.value.password){
       return item;
     }
     
     })
 
   if(matchedObj){
    console.log(this.loginForm.value);
    this.apiCallService.userName=this.loginForm.value.userName;
     this.router.navigateByUrl('Osucess');
   }
   else{
     this.router.navigateByUrl('owner');
   }
 }
 }
 signUp(){
  this.router.navigateByUrl("owner/ownersignup");
 }
 }
