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
  ngOnInit() {
    this.signupData();
  }
  signupData() {
    this.forgetForm = this.fb.group({

      email: ['', [Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.maxLength(15)]],

      conpassword: ['', [Validators.maxLength(15)]],
    })
  }

  resetPass(){
    
  }



  hidepass() {
    this.pass = !this.pass;
  }
  hideconpass() {
    this.conpass = !this.conpass
  }
 
  
}
