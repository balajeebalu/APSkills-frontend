import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { MyProfileService } from './my-profile-candidate.service';

@Component({
  selector: 'app-my-profile-candidate',
  templateUrl: './my-profile-candidate.component.html',
  styleUrls: ['./my-profile-candidate.component.css']
})
export class MyProfileCandidateComponent implements OnInit {
 
states:Array<any>;
districts:Array<any>;
mandals:Array<any>;
villages:Array<any>;
parliamentaries:Array<any>;

//assigned in get methods
stateId:string;
districtId:string;
mandalId:string;





  radio1=false;
  radio2=false;
  result:any;
   constructor(public fb: FormBuilder, private myProfileCandidateService:MyProfileService) { }

  ngOnInit() {

    this.myProfileCandidateService.getAllStates().subscribe(data => {
      this.states = data;
  
    });
   
   


  }

  //get methods for contact details form

  getDistrictsForState(stateId:string) {
   
    this.myProfileCandidateService.getDistrictsForState(stateId).subscribe(data => {
      this.districts = data;
    
    });
  }

  getMandalForDistrict(districtId:string) {
    
    this.myProfileCandidateService.getMandalForDistrict(districtId).subscribe(data => {
      this.mandals = data;

    });
  }

  getVillageForMandal(mandalId:string) {
    this.myProfileCandidateService.getVillageForMandal(mandalId).subscribe(data => {
      this.villages = data;
    });
  }
  getParliamentaryForState(stateId:string) {
    this.myProfileCandidateService.getParliamentaryForState(stateId).subscribe(data => {
      this.parliamentaries = data;
    });
  }

  show1(){
    this.radio1=true;
    this.radio2=false;
  }

  show2(){
    this.radio2=true;
    this.radio1=false;
  }

//personal details form
  personalDetailsForm= this.fb.group({
  
    prefix: [' ', [Validators.required]],
    candidateFullName: [' ', [Validators.required]],
    uploadProfilePicture: [' ', [Validators.required]],
    countryCodes: [' ', [Validators.required]],
    phoneNumber: [' ', [Validators.required]],
    emailAddress: [' ', [Validators.required]],
    gender: [' ', [Validators.required]],
    dateOfBirth: [' ', [Validators.required]],
    maritalStatus: [' ', [Validators.required]],
    domicileState: [' ', [Validators.required]],
    domicileDistrict: [' ', [Validators.required]],
    category: [' ', [Validators.required]],
    religion: [' ', [Validators.required]],
    motherName: [' ', [Validators.required]],
    fatherName: [' ', [Validators.required]],
    anyDisability: [' ', [Validators.required]],
    typeOfDisability: [' ', [Validators.required]],
    uploadSupportingDocument: [' ', [Validators.required]],
    /* identification: [' ', [Validators.required]],
    alternateId: [' ', [Validators.required]], */
    identificationType: [' ', [Validators.required]],
    address: [' ', [Validators.required]],
    pinCode: [' ', [Validators.required]],
    state: [' ', [Validators.required]],
    district: [' ', [Validators.required]],
    mandal: [' ', [Validators.required]],
    village: [' ', [Validators.required]],
    parliamentaryConstituency: [' ', [Validators.required]],
  });
//contact details form
  contactDetailsForm= this.fb.group({
  
    address: [' ', [Validators.required]],
    pinCode: [' ', [Validators.required]],
    state: [' ', [Validators.required]],
    district: [' ', [Validators.required]],
    mandal: [' ', [Validators.required]],
    parliamentary: [' ', [Validators.required]],
    accountHolderName: [' ', [Validators.required]],
    accountNumber: [' ', [Validators.required]],
    ifscCode: [' ', [Validators.required]],
    bankName: [' ', [Validators.required]],
    bankAddress: [' ', [Validators.required]],
    village: [' ', [Validators.required]],
  
  });
  //education details form

  educationalDetailsForm= this.fb.group({
  
    education: [' ', [Validators.required]],
    yearOfPassing: [' ', [Validators.required]],
    preTrainingStatus: [' ', [Validators.required]],
    previousExperience: [' ', [Validators.required]],
    employmentDetails: [' ', [Validators.required]],
    previousExperiencesector: [' ', [Validators.required]],
    previousExperienceJobRole: [' ', [Validators.required]],
    employed: [' ', [Validators.required]],
    monthsOfExperience: [' ', [Validators.required]],
    employmentStatus: [' ', [Validators.required]],
    uploadSupportingDocuments: [' ', [Validators.required]],
   
  });

  //course preferences form
  coursePreferencesForm= this.fb.group({
  
    heardAboutUs: [' ', [Validators.required]],
    sector: [' ', [Validators.required]],
    subSector: [' ', [Validators.required]],
    jobRole: [' ', [Validators.required]],
   
  });
  //declaration form

  declarationForm= this.fb.group({
  
    declarationUndertaking: [' ', [Validators.required]],
   
  });


//posting data to forms on submit 
  onSubmit(personalDetailsForm){
    console.log(personalDetailsForm);
    let serializedForm = JSON.stringify(personalDetailsForm);
    console.log(serializedForm);
    this.myProfileCandidateService.onSubmit(serializedForm).subscribe((data)=>{
    this.result=data;
    console.log("success!", data),
    error => console.error("couldn't post because", error)
    })
  }
  onSubmitContactForm(contactDetailsForm){
    console.log(contactDetailsForm);
    let serializedContactDetailsForm = JSON.stringify(contactDetailsForm);
    console.log(serializedContactDetailsForm);
    this.myProfileCandidateService.onSubmitContactForm(serializedContactDetailsForm).subscribe((data)=>{
    this.result=data;
    console.log("success!", data),
    error => console.error("couldn't post because", error)
    })
  }

  onSubmitEducationForm(educationalDetailsForm){
    console.log(educationalDetailsForm);
    let serializedEducationDetailsForm = JSON.stringify(educationalDetailsForm);
    console.log(serializedEducationDetailsForm);
    this.myProfileCandidateService.onSubmitEducationForm(serializedEducationDetailsForm).subscribe((data)=>{
    this.result=data;
    console.log("success!", data),
    error => console.error("couldn't post because", error)
    })
  }

  onSubmitCoursePreferencesForm(coursePreferencesForm){
    console.log(coursePreferencesForm);
    let serializedCoursePreferencesForm = JSON.stringify(coursePreferencesForm);
    console.log(serializedCoursePreferencesForm);
    this.myProfileCandidateService.onSubmitCoursePreferencesForm(serializedCoursePreferencesForm).subscribe((data)=>{
    this.result=data;
    console.log("success!", data),
    error => console.error("couldn't post because", error)
    })
  }


  onSubmitDeclarationForm(declarationForm){
    console.log(declarationForm);
    let serializedDeclarationForm = JSON.stringify(declarationForm);
    console.log(serializedDeclarationForm);
    this.myProfileCandidateService.onSubmitDeclarationForm(serializedDeclarationForm).subscribe((data)=>{
    this.result=data;
    console.log("success!", data),
    error => console.error("couldn't post because", error)
    })
  }

 
}
