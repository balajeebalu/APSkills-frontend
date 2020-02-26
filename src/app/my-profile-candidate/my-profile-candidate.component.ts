import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { MyProfileService } from './my-profile-candidate.service';

@Component({
  selector: 'app-my-profile-candidate',
  templateUrl: './my-profile-candidate.component.html',
  styleUrls: ['./my-profile-candidate.component.css']
})
export class MyProfileCandidateComponent implements OnInit {
 
  radio1=false;
  radio2=false;
  result:any;
   constructor(public fb: FormBuilder, private myProfileCandidateService:MyProfileService) { }

  ngOnInit() {
  }

  show1(){
    this.radio1=true;
    this.radio2=false;
  }

  show2(){
    this.radio2=true;
    this.radio1=false;
  }


  personalDetailsForm= this.fb.group({
  
    namePrefix: [' ', [Validators.required]],
    candidateName: [' ', [Validators.required]],
    image: [' ', [Validators.required]],
    countryCode: [' ', [Validators.required]],
    contactNumber: [' ', [Validators.required]],
    emailId: [' ', [Validators.required]],
    gender: [' ', [Validators.required]],
    dob: [' ', [Validators.required]],
    maritalStatus: [' ', [Validators.required]],
    domicileState: [' ', [Validators.required]],
    domicileDistrict: [' ', [Validators.required]],
    community: [' ', [Validators.required]],
    religion: [' ', [Validators.required]],
    mothersName: [' ', [Validators.required]],
    fathersName: [' ', [Validators.required]],
    disability: [' ', [Validators.required]],
    disabilityType: [' ', [Validators.required]],
    supportingDocument: [' ', [Validators.required]],
    identification: [' ', [Validators.required]],
    alternateId: [' ', [Validators.required]],
    identificationType: [' ', [Validators.required]],
    address: [' ', [Validators.required]],
    pinCode: [' ', [Validators.required]],
    state: [' ', [Validators.required]],
    district: [' ', [Validators.required]],
    mandal: [' ', [Validators.required]],
    city: [' ', [Validators.required]],
    parliamentaryConstituency: [' ', [Validators.required]],
  })

  onSubmit(personalDetailsForm){
    console.log(personalDetailsForm);

    this.myProfileCandidateService.onSubmit(personalDetailsForm).subscribe((data)=>{
      this.result=data;
      console.log(data);
    })
  }
  
}
