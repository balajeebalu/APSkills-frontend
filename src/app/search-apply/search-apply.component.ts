import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-apply',
  templateUrl: './search-apply.component.html',
  styleUrls: ['./search-apply.component.css']
})
export class SearchApplyComponent implements OnInit {
  isShow :boolean= false;

  constructor() { }

  ngOnInit() {
  }
  toggleDisplay() {
    this.isShow = !this.isShow;
  }
}
