import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile-candidate',
  templateUrl: './my-profile-candidate.component.html',
  styleUrls: ['./my-profile-candidate.component.css']
})
export class MyProfileCandidateComponent implements OnInit {
 
  radio1=false;
  radio2=false;
   constructor() { }

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
}
