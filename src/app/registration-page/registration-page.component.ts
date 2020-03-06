import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from './registration-page.service';


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  myRecaptcha: boolean
  userGroup: Array<any>;
  result: Object;
 
  onScriptLoad() {
      console.log('Google reCAPTCHA loaded and is ready for use!')
  }

  onScriptError() {
      console.log('Something went long when loading the Google reCAPTCHA')
  }
  constructor(public fb: FormBuilder,private registrationService:RegistrationService) { }

  registrationForm=this.fb.group({
  
    username: [' ', [Validators.required]],
    email: [' ', [Validators.required]],
    password: [' ', [Validators.required]],
    
  })
  ngOnInit() {
    /* this.registrationService.getUserGroup().subscribe(data => {
      this.userGroup = data;
    }); */
  }

  onSubmit(registrationForm) {
    console.log(registrationForm);
 /*    registrationForm= Object.assign(registrationForm, { userId: 11 }); */
    let serializedRegistartionForm = JSON.stringify(registrationForm);
    console.log(serializedRegistartionForm);
    this.registrationService.onSubmit(serializedRegistartionForm).subscribe((data) => {
      this.result = data;
    
        error => console.error("couldn't post because", error)
    })
  }
 
}
