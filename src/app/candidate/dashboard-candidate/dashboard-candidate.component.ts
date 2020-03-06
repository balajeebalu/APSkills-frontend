import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-candidate',
  templateUrl: './dashboard-candidate.component.html',
  styleUrls: ['./dashboard-candidate.component.css']
})
export class DashboardCandidateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  signOut() {
    window.sessionStorage.clear();
    this.router.navigate(['login'])
  }
}
