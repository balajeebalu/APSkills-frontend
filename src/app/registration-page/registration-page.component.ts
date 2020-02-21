import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  myRecaptcha: boolean
 
  onScriptLoad() {
      console.log('Google reCAPTCHA loaded and is ready for use!')
  }

  onScriptError() {
      console.log('Something went long when loading the Google reCAPTCHA')
  }
  constructor(public fb: FormBuilder) { }

  registrationForm=this.fb.group({
    userGroup: [' ', [Validators.required]],
    name: [' ', [Validators.required]],
    email: [' ', [Validators.required]],
    mobile: [' ', [Validators.required]],
    agree: [' ', [Validators.required]],
  })
  ngOnInit() {
    
  }
 
}
