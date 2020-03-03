import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

import { ViewbatchService } from './view-batches-candidate.service';

@Component({
  selector: 'app-view-batches-candidate',
  templateUrl: './view-batches-candidate.component.html',
  styleUrls: ['./view-batches-candidate.component.css']
})

export class ViewBatchesCandidateComponent implements OnInit {
  
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

  viewBatches: any;
  batchData: Array<any>;

  //used in data table
  dtOptions: DataTables.Settings = {};

  constructor(public fb: FormBuilder, private viewbatchService: ViewbatchService) {

  }

  ngOnInit() {
    this.viewbatchService.getAllDistricts().subscribe(data => {
      this.districts = data;
     
    });
    this.viewbatchService.getAllSectors().subscribe(data => {
      this.sectors = data;
    });


     this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }

  getSectorsForDistrict(districtID: string) {
    this.viewbatchService.getSectorsForDistrict(districtID).subscribe(data => {
      this.sectors = data;
    });
  }

  getSubsectorsForSector(sectorId: string) {
    this.viewbatchService.getSubsectorsForSector(sectorId).subscribe(data => {
      this.subSectors = data;
    });
  }

  getJobrolesForSubsector(subsectorId: string) {
    this.viewbatchService.getJobrolesForSubsector(subsectorId).subscribe(data => {
      this.jobRoles = data;
    });
  }

  viewBatchesForm = this.fb.group({
    districtId: [' ', [Validators.required]],
    jobRoleId: [' ', [Validators.required]],
    sectorId: [' ', [Validators.required]],
    subSectorId: [' ', [Validators.required]]
  })
  
  onSubmit(viewBatches) {

    this.districtId = viewBatches.districtId;
    this.sectorId = viewBatches.sectorId;
    this.subsectorId = viewBatches.subSectorId;
    this.jobId = viewBatches.jobRoleId;

    if (this.districtId != null && this.districtId.length > 0 &&
      this.sectorId != null && this.sectorId.length > 0 &&
      this.subsectorId != null && this.subsectorId.length > 0 &&
      this.jobId != null && this.jobId.length > 0  ) {

      this.viewbatchService.onSubmit(this.districtId, this.sectorId, this.subsectorId, this.jobId).subscribe(data => {
      // call other function which help in populating your data fetched from BE to table
        this.batchData = data;
        console.log(this.batchData);
      });
    } else {
      alert('Fill all mandatory fields');
    }

  }



}
