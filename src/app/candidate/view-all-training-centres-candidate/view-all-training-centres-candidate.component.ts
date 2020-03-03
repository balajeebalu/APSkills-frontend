import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ViewTrainingCentresService } from './view-all-training-centres-candidate.service';


@Component({
  selector: 'app-view-all-training-centres-candidate',
  templateUrl: './view-all-training-centres-candidate.component.html',
  styleUrls: ['./view-all-training-centres-candidate.component.css']
})
export class ViewAllTrainingCentresCandidateComponent implements OnInit {
  selectedDistrict: string = '';
  selectedJobRole: string = '';
  districts: Array<any>;
  jobRoles: Array<any>;
  sectors: Array<any>;
  subSectors: Array<any>;
  
  //used in onsubmit method when apply filter is pressed
  sectorId: string;
  subsectorId: string;
  districtId: string;
  jobId: string;

  viewTrainingCentres: any;
  batchData: Array<any>;

  //used in data table
  dtOptions: DataTables.Settings = {};
  

  constructor(public fb: FormBuilder,private viewtrainingcentresService: ViewTrainingCentresService) { }



  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
     
    this.viewtrainingcentresService.getAllDistricts().subscribe(data => {
     
      this.districts = data;
      
    });
    this.viewtrainingcentresService.getAllSectors().subscribe(data=>{
      this.sectors = data;
      });

};
getSectorsForDistrict(districtID: string){
  this.viewtrainingcentresService.getSectorsForDistrict(districtID).subscribe(data => {
  this.sectors = data;

  });
}

getSubsectorsForSector(sectorId:string){
  this.viewtrainingcentresService.getSubsectorsForSector(sectorId).subscribe(data => {
  this.subSectors = data;
  });
}

getJobrolesForSubsector(subsectorId: string){
this.viewtrainingcentresService.getJobrolesForSubsector(subsectorId).subscribe(data => {
this.jobRoles = data;
});
}

viewTrainingCentresForm = this.fb.group({
  districtId: [' ', [Validators.required]],
  jobRoleId:[' ', [Validators.required]],
  sectorId:[' ', [Validators.required]],
  subSectorId:[' ', [Validators.required]]

})

onSubmit(viewTrainingCentres) {
  this.districtId = viewTrainingCentres.districtId;
  this.sectorId = viewTrainingCentres.sectorId;
  this.subsectorId = viewTrainingCentres.subSectorId;
  this.jobId = viewTrainingCentres.jobRoleId;

  if (this.districtId != null && this.districtId.length > 0 &&
    this.sectorId != null && this.sectorId.length > 0 &&
    this.subsectorId != null && this.subsectorId.length > 0 &&
    this.jobId != null && this.jobId.length > 0  ) {

    this.viewtrainingcentresService.onSubmit(this.districtId, this.sectorId, this.subsectorId, this.jobId).subscribe(data => {
    // call other function which help in populating your data fetched from BE to table
      this.batchData = data;
      console.log(this.batchData);
    });
  } else {
    alert('Fill all mandatory fields');
  }

}


}