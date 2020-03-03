import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import {ViewaddPreferenceService} from './view-add-preferences-candidate.service';

@Component({
  selector: 'app-view-add-preferences-candidate',
  templateUrl: './view-add-preferences-candidate.component.html',
  styleUrls: ['./view-add-preferences-candidate.component.css']
})
export class ViewAddPreferencesCandidateComponent implements OnInit {


  
  selectedJobRole: string = '';
  selectedSector: string ='';
  selectedSubSector: string ='';
  
  jobRoles: Array<any>;
  sectors: Array<any>;
  subSectors: Array<any>;



  //used in onsubmit method when add is pressed
  sectorId: string;
  subsectorId: string;
  jobId: string;



  
  viewAddPreferences : any;
  batchData: Array<any>;
  
  //used in data table
  dtOptions: DataTables.Settings = {};

  constructor(public fb: FormBuilder, private viewaddPreferenceService: ViewaddPreferenceService) {

  }
  
  ngOnInit() {
   
    this.viewaddPreferenceService.getAllSectors().subscribe(data => {
      this.sectors = data;
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }



  getSubsectorsForSector(sectorId: string) {
    this.viewaddPreferenceService.getSubsectorsForSector(sectorId).subscribe(data => {
      this.subSectors = data;
     
    });
  }

  getJobrolesForSubsector(subsectorId: string) {
    this.viewaddPreferenceService.getJobrolesForSubsector(subsectorId).subscribe(data => {
      this.jobRoles = data;
    });
  }

  viewAddPreferencesForm = this.fb.group({
  
    jobRoleId: [' ', [Validators.required]],
    sectorId: [' ', [Validators.required]],
    subSectorId: [' ', [Validators.required]]
  })
  
  onSubmit(viewAddPreferences)
  
  {
    console.log("a");
   
    this.sectorId = viewAddPreferences.sectorId;
    this.subsectorId = viewAddPreferences.subSectorId;
    this.jobId = viewAddPreferences.jobRoleId;
     
    console.log(viewAddPreferences);


    if (
      this.sectorId != null && this.sectorId.length > 0 &&
      this.subsectorId != null && this.subsectorId.length > 0 &&
      this.jobId != null && this.jobId.length > 0  ) {

      this.viewaddPreferenceService.onSubmit( this.sectorId, this.subsectorId, this.jobId).subscribe(data => {
      // call other function which help in populating your data fetched from BE to table
        this.batchData = data;
        console.log(this.batchData);
      });
    } else {
      alert('Fill all mandatory fields');
    }

  }

  

}
