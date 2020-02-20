import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-all-rozgar-melas-candidate',
  templateUrl: './view-all-rozgar-melas-candidate.component.html',
  styleUrls: ['./view-all-rozgar-melas-candidate.component.css']
})
export class ViewAllRozgarMelasCandidateComponent implements OnInit {
  model: NgbDateStruct;
  date: {year: number, month: number};
  constructor(private calendar: NgbCalendar) { }

  ngOnInit() {
  }

}
