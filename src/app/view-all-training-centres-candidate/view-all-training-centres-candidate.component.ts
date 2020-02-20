import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { ViewTrainingCentresService } from './view-all-training-centres-candidate.service';


@Component({
  selector: 'app-view-all-training-centres-candidate',
  templateUrl: './view-all-training-centres-candidate.component.html',
  styleUrls: ['./view-all-training-centres-candidate.component.css']
})
export class ViewAllTrainingCentresCandidateComponent implements OnInit {
  isSubmitted = false;
  selectedDistrict: string = '';
  selectedJobRole:string='';
  districts: Array <any>;
  jobRoles: Array <any>;
  sectors: Array <any>;
  sectorId: any;
  districtId: any;
  
  

  constructor(public fb: FormBuilder,http: HttpClient,private viewtrainingcentresService: ViewTrainingCentresService) { }

 /*  public data = [
    {S_No:'1', TC_ID:'TC123684', Training_Centre_Name:'Rigpa Edusolutions_Bagber Panchayat,Sepahijala', Job_Role_Name:'', District:'Sepahijala', Action:'...'},
    {S_No:'2', TC_ID:'TC123676', Training_Centre_Name:'SLIEM_PURBA BARJALA,WEST TRIPURA', Job_Role_Name:'', District:'BADGAM', Action:'...'},
    {S_No:'3', TC_ID:'TC123668', Training_Centre_Name:'SLIEM_SUNAIMURI, KUMARGHAT, UNAKOTI', Job_Role_Name:'', District:'West Tripura', Action:'...'},
    {S_No:'4', TC_ID:'TC123666', Training_Centre_Name:'SLIEM_GIAS UDDIN ANGANWADI CENTRE,NORTH', Job_Role_Name:'', District:'West Tripura', Action:'...'},
    {S_No:'5', TC_ID:'TC123665', Training_Centre_Name:'SLIEM_ DASPARA I C D S CENTRE,GOMATI', Job_Role_Name:'', District:'Unakoti', Action:'...'},
    {S_No:'6', TC_ID:'TC123662', Training_Centre_Name:'SLIEM_ PASHCHIM KHILPARA,MATABARI, GOMATI', Job_Role_Name:'',District:'North Tripura', Action:'...'},
    {S_No:'7', TC_ID:'TC123660', Training_Centre_Name:'PMKK Budgam', Job_Role_Name:'', District:'Gomati', Action:'...'},
    {S_No:'8', TC_ID:'TC123659', Training_Centre_Name:'SLIEM_ PURBA GANKI,KHOWAI TRIPURA	', Job_Role_Name:'',District:'Gomati', Action:'...'},
    {S_No:'9', TC_ID:'TC123658', Training_Centre_Name:'SLIEM_BIJOYNAGAR BAZAR MOHANPUR, WEST TRIPURA', Job_Role_Name:'', District:'Khowai', Action:'...'},
    {S_No:'10', TC_ID:'TC123657', Training_Centre_Name:'SLIEM_ CHAR GANKI, KHOWAI TRIPURA', Job_Role_Name:'', District:'Khowai', Action:'...'},
  ];
 */

  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
     
    this.viewtrainingcentresService.getAllDistricts().subscribe(data => {
     
      this.districts = data;
      
    });
    this.viewtrainingcentresService.getAllSectors(this.districtId).subscribe(data=>{
      this.sectors = data;
      });

      this.viewtrainingcentresService.getJobrolesForSector(this.sectorId).subscribe(data => {
        this.jobRoles = data;
      });   

};
getSectorsForDistrict(e,districtId: string){
  this.viewtrainingcentresService.getSectorsForDistrict(e.target.value).subscribe(data => {
    this.districtId=e.target.value;
  this.sectors = data;
  });
}



getJobrolesForSector(e,sectorId: string){
this.viewtrainingcentresService.getJobrolesForSector(e.target.value).subscribe(data => {
 this.sectorId=e.target.value;
 this.jobRoles = data;
});

}

viewTrainingCentresForm = this.fb.group({
  districtName: [' ', [Validators.required]],
  jobRoles:['', [Validators.required]],
  sectors:['', [Validators.required]],

})

changeDistrict(e) {
  console.log(e.value);
  this.districtName.setValue(e.target.value, {onlySelf: true});
}
changeJobRole(e) {
  console.log(e.value);
  
  this.jobRole.setValue(e.target.value, {onlySelf: true});
}
changeSector(e) {
  console.log(e.value);
  this.sector.setValue(e.target.value, {onlySelf: true});

}

get districtName() { return this.viewTrainingCentresForm.get("districtName"); }
get jobRole(){return this.viewTrainingCentresForm.get('jobRole')};
get sector(){return this.viewTrainingCentresForm.get('sector')};

onSubmit(viewTrainingCentres) {
  this.isSubmitted = true;
  console.log(viewTrainingCentres);

  if (!this.viewTrainingCentresForm.valid) {
    return false;
  } else {

    this.selectedDistrict=this.viewTrainingCentresForm.value.districtName;
    this.selectedJobRole=this.viewTrainingCentresForm.value.jobRole;
  }

}


}