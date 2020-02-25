
import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { ViewRozgarMelaService } from './view-all-rozgar-melas-candidate.service'
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-view-all-rozgar-melas-candidate',
  templateUrl: './view-all-rozgar-melas-candidate.component.html',
  styleUrls: ['./view-all-rozgar-melas-candidate.component.css']
})
export class ViewAllRozgarMelasCandidateComponent implements OnInit {
  
  districts:Array<any>;
  melass: Array<any>;
  MelaId: string;
  melaStartDate: any;
  melaEndDate: any;
  districtId:String;
  

  viewMelas: any;
  melaData: Array<any>;
  //used in data table
  dtOptions: DataTables.Settings = {};

  model: NgbDateStruct;
  date: {year: number, month: number};
  constructor(public fb:FormBuilder,private calendar: NgbCalendar,private viewRozgarMelaService:  ViewRozgarMelaService) { }

  ngOnInit() {
    this.viewRozgarMelaService.getAllDistricts().subscribe(data => {
      this.districts = data;
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }
  
  viewMelasForm = this.fb.group({
    districtId: [' ', [Validators.required]],   
    startDate:[' ', [Validators.required]],   
    endDate:[' ', [Validators.required]],
  })



    onSubmit(viewMelas) {

      this.districtId= viewMelas.districtId;
     this.melaStartDate=viewMelas.melaStartDate;
     this.melaEndDate=viewMelas.melaEndDate;
  
      if (this.districtId!= null && this.districtId.length > 0 && this.melaStartDate!=null && this.melaStartDate.length >0
         && this.melaEndDate!=null&& this.melaEndDate>0)
       
         {
  
        this.viewRozgarMelaService.onSubmit(this.districtId,this.melaStartDate,this.melaEndDate).subscribe(data => {
        // call other function which help in populating your data fetched from BE to table
          this.melaData = data;
          console.log(this.melaData);
        });
      } else {
        alert('Fill all mandatory fields');
      }
  }

}