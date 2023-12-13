import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallserviceService } from 'src/app/common services/apicallservice.service';

@Component({
  selector: 'app-owner-signup',
  templateUrl: './owner-signup.component.html',
  styleUrls: ['./owner-signup.component.scss']
})
export class OwnerSignupComponent {
  showpass: boolean = true;
  signControlForm!: FormGroup;
  genderselector: boolean = false;
  pass = false;
  conpass = false;
  endPoint: string = "owner";

  constructor(private fb: FormBuilder, private router: Router, private apiCallService: ApicallserviceService) { }
  ngOnInit() {
    this.signupData();
  }
  signupData() {
    this.signControlForm = this.fb.group({
      fname: ['', [Validators.maxLength(16), Validators.pattern('[a-zA-Z ]*')]],

      pan: ['', [this.whitespacefun, Validators.maxLength(15), Validators.pattern('[A-Z 1-9]*')]],

      email: ['', [Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.maxLength(15), Validators.pattern('[a-zA-Z0-9@ #]*')]],

      conpassword: ['', [Validators.maxLength(15), Validators.pattern('[a-zA-Z0-9@ #]*')]],
      gender: [],




    })
  }

  whitespacefun(customval: any) {
    console.log('');

    let customwhite = customval.value ? customval.value?.trim().length == 0 : null;
    return customwhite ? { 'whiteSpace': true } : null;
  }

  submit() {
    let genvalue = this.signControlForm.value.gender;
    if (genvalue) {
      console.log('data', this.signControlForm.value);
      // this.signControlForm.reset();
      this.apiCallService.postApiCall(this.endPoint, this.signControlForm.value).subscribe(response => {
        console.log("res>>",response);
        if(response){
          alert('Data submitted Successfuly...!!');
          this.router.navigateByUrl('owner');
          
        }
      })
    }
    else {
      this.genderselector = true;
      return;
    }
    
    
    


  }

  genselect() {
    this.genderselector = false;
  }

  back() {
    this.router.navigateByUrl("owner");
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

}


