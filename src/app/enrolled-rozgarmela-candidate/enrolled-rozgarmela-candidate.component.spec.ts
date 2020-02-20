import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledRozgarmelaCandidateComponent } from './enrolled-rozgarmela-candidate.component';

describe('EnrolledRozgarmelaCandidateComponent', () => {
  let component: EnrolledRozgarmelaCandidateComponent;
  let fixture: ComponentFixture<EnrolledRozgarmelaCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrolledRozgarmelaCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolledRozgarmelaCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
