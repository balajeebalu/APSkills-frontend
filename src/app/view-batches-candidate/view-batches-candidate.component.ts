import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { ViewbatchService } from './view-batches-candidate.service';

@Component({
  selector: 'app-view-batches-candidate',
  templateUrl: './view-batches-candidate.component.html',
  styleUrls: ['./view-batches-candidate.component.css']
})
export class ViewBatchesCandidateComponent implements OnInit {
  isSubmitted = false;
  selectedDistrict: string = '';
  selectedJobRole:string='';
  districts: Array <any>;
  jobRoles: Array <any>;
  sectors: Array <any>;
  subSectors:Array <any>;
  sectorId: any;
  subsectorId: any;
  

 
  constructor(public fb: FormBuilder,http: HttpClient,private viewbatchService: ViewbatchService) { }
  ngOnInit() {
    this.viewbatchService.getAllDistricts().subscribe(data => {
     
      this.districts = data;
      
    });
    this.viewbatchService.getAllSectors().subscribe(data=>{
      this.sectors = data;
      });

      this.viewbatchService.getJobrolesForSubsector(1221).subscribe(data => {
        this.jobRoles = data;
      });

  }

  getSectorsForDistrict(districtID: string){
       this.viewbatchService.getSectorsForDistrict(districtID).subscribe(data => {
       this.sectors = data;
       });
     }
  
    getSubsectorsForSector(e,sectorId:string){
       this.viewbatchService.getSubsectorsForSector(e.target.value).subscribe(data => {
        sectorId=e.target.value;
       this.subSectors = data;
       });
     }
  
  getJobrolesForSubsector(e,subsectorId: string){
    this.viewbatchService.getJobrolesForSubsector(e.target.value).subscribe(data => {
      subsectorId=e.target.value;
      this.jobRoles = data;
    });
  }
  viewBatchesForm = this.fb.group({
    districtName: [' ', [Validators.required]],
    jobRoles:['', [Validators.required]],
    sectors:['', [Validators.required]],
    subSectors:['', [Validators.required]]
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
  changeSubSector(e) {
    console.log(e.value);
    this.subSector.setValue(e.target.value, {onlySelf: true});
 
  }
  
  get districtName() { return this.viewBatchesForm.get("districtName"); }
  get jobRole(){return this.viewBatchesForm.get('jobRole')};
  get sector(){return this.viewBatchesForm.get('sector')};
  get subSector(){return this.viewBatchesForm.get('subSector')};
  onSubmit(viewBatches) {
    this.isSubmitted = true;
    console.log(viewBatches);

    if (!this.viewBatchesForm.valid) {
      return false;
    } else {
  
      this.selectedDistrict=this.viewBatchesForm.value.districtName;
      this.selectedJobRole=this.viewBatchesForm.value.jobRole;
    }

  }

/*   selectChangeHandler (event: any) {
    //update the ui
    this.selectedDistrict = event.target.value;
  } */
/*   changeDistrict(e) {
    this.districtName.setValue(e.target.value, {
      onlySelf: true
    })
  } */

}
