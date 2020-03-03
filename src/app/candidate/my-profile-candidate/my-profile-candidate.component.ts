import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from "@angular/forms";
import { MyProfileService } from './my-profile-candidate.service';
import { FileUploader } from 'ng2-file-upload';

const uploadAPI = '//localhost:8080/upload'; 

@Component({
  selector: 'app-my-profile-candidate',
  templateUrl: './my-profile-candidate.component.html',
  styleUrls: ['./my-profile-candidate.component.css']
})
export class MyProfileCandidateComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: uploadAPI, itemAlias: 'file' });

 //assigned in get and post methods
  states: Array<any>;
  districts: Array<any>;
  mandals: Array<any>;
  villages: Array<any>;
  parliamentaries: Array<any>;
  education: Array<any>;
  yearOfPassing: Array<any>;
  preTrainingStatus: Array<any>;
  previousExperienceSector: Array<any>;
  educationJobRole: Array<any>;
  monthsOfExperience: Array<any>;
  employmentStatus: Array<any>;
  employed: Array<any>;
  heardAboutUs:Array<any>;
  declaration: Array<any>;
  sectors:Array<any>;
  prefix:Array<any>;
  stateId: string;
  districtId: string;
  mandalId: string;
  educationSectorId:string;
  sectorName:Array<any>;
  subSectors:Array<any>;
  jobRoles: Array<any>;
  subSectorId: Array<any>;
  maritalStatus:Array<any>;
  community:Array<any>;
  religion:Array<any>;
  disability:Array<any>;
  typeOfDisability:Array<any>;
  disabilityId:string;
  domicileStates:Array<any>;
  domicileDistricts:Array<any>;
  domicileStateId:string;
  readioSelected:any;
  showcontent:boolean=false;
  result: any;
  dob: any;
  submitted = false;

  
  
  
constructor(public fb: FormBuilder, private myProfileCandidateService: MyProfileService) { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('FileUpload:uploaded successfully:', item, status, response);
         alert('Your file has been uploaded successfully');
    };

    this.myProfileCandidateService.getAllStates().subscribe(data => {
      this.states = data;
    });

    this.myProfileCandidateService.getEducation().subscribe(data => {
      this.education = data;
      
    });
    this.myProfileCandidateService.getYearOfPassing().subscribe(data => {
      this.yearOfPassing = data;
      
    });
    this.myProfileCandidateService.getPreTrainingStatus().subscribe(data => {
      this.preTrainingStatus = data;
      
    });
    this.myProfileCandidateService.getExperienceSector().subscribe(data => {
      this.previousExperienceSector = data;
      
    });
    this.myProfileCandidateService.getMonthsOfExperience().subscribe(data => {
      this.monthsOfExperience = data;
     
      
    });
    this.myProfileCandidateService.getEmployed().subscribe(data => {
      this.employed = data;
      
    });
    this.myProfileCandidateService.getAllSectors().subscribe(data => {
      this.sectors = data;
      
    });
    this.myProfileCandidateService. getHeardAboutUs().subscribe(data => {
      this.heardAboutUs = data;
      
    });
    this.myProfileCandidateService. getDeclaration().subscribe(data => {
      this.declaration = data;
    
    });
    this.myProfileCandidateService. getPrefix().subscribe(data => {
      this.prefix = data;
    
    });
    this.myProfileCandidateService.getMaritalStatus().subscribe(data => {
      this.maritalStatus = data;
    
    });
    this.myProfileCandidateService.getCommunity().subscribe(data => {
      this.community = data;
    
    });
    this.myProfileCandidateService.getReligion().subscribe(data => {
      this.religion = data;
    
    });
    this.myProfileCandidateService.getDisability().subscribe(data => {
      this.disability = data;
       
    });
    this.myProfileCandidateService.getDomicileState().subscribe(data => {
      this.domicileStates = data;
       
    });





  }

  //get methods for personal details form
  getDisabilityType(disabilityName: string) {
    let disabilityId = this.disability.filter(ele => ele.disability == disabilityName)[0].disabilityId
    console.log(disabilityId);
    this.myProfileCandidateService.getDisabilityType(disabilityId).subscribe(data => {
      this.typeOfDisability = data;

    });
  }
  getDomicileDistrictforDomicileState(domicileStateName: string) {
    let domicileStateId = this.domicileStates.filter(ele => ele.domicileState == domicileStateName)[0].domicileStateId 
    this.myProfileCandidateService.getDomicileDistrictforDomicileState(domicileStateId ).subscribe(data => {
      this.domicileDistricts = data;

    });
  }

  //get methods for contact details form

  getDistrictsForState(stateName: string) {
    let stateId = this.states.filter(ele => ele.stateName == stateName)[0].stateId
    this.myProfileCandidateService.getDistrictsForState(stateId).subscribe(data => {
      this.districts = data;

    });
  }

  getMandalForDistrict(districtName: string) {
    let districtId = this.districts.filter(ele => ele.districtName == districtName)[0].districtId
    this.myProfileCandidateService.getMandalForDistrict(districtId).subscribe(data => {
      this.mandals = data;

    });
  }

  getVillageForMandal(mandalName: string) {
    let mandalId = this.mandals.filter(ele => ele.mandalName == mandalName)[0].mandalId
    this.myProfileCandidateService.getVillageForMandal(mandalId).subscribe(data => {
      this.villages = data;
    });
  }
  getParliamentaryForState(stateName: string) {
    let stateId = this.states.filter(ele => ele.stateName == stateName)[0].stateId
    this.myProfileCandidateService.getParliamentaryForState(stateId).subscribe(data => {
      this.parliamentaries = data;
    });
  }

  //get methods for education details form
  getJobRoleForEducationSector(previousExperienceSector: string) {
    let educationSectorId = this.previousExperienceSector.filter(ele => ele.previousExperienceSector == previousExperienceSector)[0].educationSectorId
    this.myProfileCandidateService.getJobRoleForEducationSector(educationSectorId).subscribe(data => {
      this.educationJobRole = data;
     
    });
  }

    


 

  //get methods for course preferences form
  getSubsectorsForSectors(sectorName :string) {
    let sectorId = this.sectors.filter(ele => ele.sectorName == sectorName)[0].sectorId
    this.myProfileCandidateService.getSubsectorsForSectors(sectorId).subscribe(data => {
      this.subSectors = data;
     
    });
  }
  getJobrolesForSubsector(subSectorName :string) {
    let subSectorId = this.subSectors.filter(ele => ele.subSectorName == subSectorName)[0].subSectorId
    this.myProfileCandidateService.getJobrolesForSubsector(subSectorId).subscribe(data => {
      this.jobRoles = data;
      console.log(this.jobRoles);
    });
  }

  toString(dob: any) {
    dob = new Date();
    dob = dob.getUTCFullYear() + "-" + dob.getUTCMonth() + "-" + dob.getUTCDate();

    console.log(dob);
  }
  showContent(){
    this.showcontent=this.readioSelected;
  }

  //personal details form
  personalDetailsForm = this.fb.group({

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
     identification: [' ', [Validators.required]],
    alternateId: [' ', [Validators.required]], 
    identificationType: [' ', [Validators.required]],
    aadharNumber:[' ', [Validators.required]],
    address: [' ', [Validators.required]],
    pinCode: [' ', [Validators.required]],
    state: [' ', [Validators.required]],
    district: [' ', [Validators.required]],
    mandal: [' ', [Validators.required]],
    village: [' ', [Validators.required]],
    parliamentaryConstituency: [' ', [Validators.required]],
  });
  //contact details form
  contactDetailsForm = this.fb.group({

    address: [' ', [Validators.required]],
    pinCode: [' ', [Validators.required]],
    state: [' ', [Validators.required]],
    district: [' ', [Validators.required]],
    mandal: [' ', [Validators.required]],
    parliamentaryConstituency: [' ', [Validators.required]],
    accountHolderName: [' ', [Validators.required]],
    accountNumber: [' ', [Validators.required]],
    ifscCode: [' ', [Validators.required]],
    bankName: [' ', [Validators.required]],
    bankAddress: [' ', [Validators.required]],
    village: [' ', [Validators.required]],

  });
  //education details form

  educationalDetailsForm = this.fb.group({

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
  coursePreferencesForm = this.fb.group({

    heardAboutUs: [' ', [Validators.required]],
    sector: [' ', [Validators.required]],
    subSector: [' ', [Validators.required]],
    jobRole: [' ', [Validators.required]],

  });
  //declaration form

  declarationForm = this.fb.group({

    declarationUndertaking: [' ', [Validators.required]],

  });

  get fval() {
    return this.personalDetailsForm.controls;
    }
  //posting data to forms on submit 
  onSubmit(personalDetailsForm) {
    this.submitted = true;
  if (this.personalDetailsForm.invalid) {
  return;
  }

    console.log(personalDetailsForm);
    personalDetailsForm = Object.assign(personalDetailsForm, { userId: 10 });
    let serializedForm = JSON.stringify(personalDetailsForm);
    console.log(serializedForm);
    this.myProfileCandidateService.onSubmit(serializedForm).subscribe((data) => {
      this.result = data;
      console.log("success!", data),
        error => console.error("couldn't post because", error)
    })
  }
  onSubmitContactForm(contactDetailsForm) {
    console.log(contactDetailsForm);
    contactDetailsForm= Object.assign(contactDetailsForm, { userId: 11 });
    let serializedContactDetailsForm = JSON.stringify(contactDetailsForm);
    console.log(serializedContactDetailsForm);
    this.myProfileCandidateService.onSubmitContactForm(serializedContactDetailsForm).subscribe((data) => {
      this.result = data;
    
        error => console.error("couldn't post because", error)
    })
  }


  onSubmitEducationForm(educationalDetailsForm) {
    console.log(educationalDetailsForm);
    educationalDetailsForm= Object.assign(educationalDetailsForm, { userId: 12 });
    let serializedEducationDetailsForm = JSON.stringify(educationalDetailsForm);
    console.log(serializedEducationDetailsForm);
    this.myProfileCandidateService.onSubmitEducationForm(serializedEducationDetailsForm).subscribe((data) => {
      this.result = data;
      console.log("success!", data),
        error => console.error("couldn't post because", error)
    })
  }

  onSubmitCoursePreferencesForm(coursePreferencesForm) {
    console.log(coursePreferencesForm);
    coursePreferencesForm= Object.assign(coursePreferencesForm, { userId: 13 });
    let serializedCoursePreferencesForm = JSON.stringify(coursePreferencesForm);
    console.log(serializedCoursePreferencesForm);
    this.myProfileCandidateService.onSubmitCoursePreferencesForm(serializedCoursePreferencesForm).subscribe((data) => {
      this.result = data;
      console.log("success!", data),
        error => console.error("couldn't post because", error)
    })
  }


  onSubmitDeclarationForm(declarationForm) {
    console.log(declarationForm);
    declarationForm= Object.assign(declarationForm, { userId: 13 });
    let serializedDeclarationForm = JSON.stringify(declarationForm);
    console.log(serializedDeclarationForm);
    this.myProfileCandidateService.onSubmitDeclarationForm(serializedDeclarationForm).subscribe((data) => {
      this.result = data;
      console.log("success!", data),
        error => console.error("couldn't post because", error)
    })
  }


}
