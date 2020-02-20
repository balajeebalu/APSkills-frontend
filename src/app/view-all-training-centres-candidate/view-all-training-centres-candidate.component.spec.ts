import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllTrainingCentresCandidateComponent } from './view-all-training-centres-candidate.component';

describe('ViewAllTrainingCentresCandidateComponent', () => {
  let component: ViewAllTrainingCentresCandidateComponent;
  let fixture: ComponentFixture<ViewAllTrainingCentresCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllTrainingCentresCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllTrainingCentresCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
