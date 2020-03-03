import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllRozgarMelasCandidateComponent } from './view-all-rozgar-melas-candidate.component';

describe('ViewAllRozgarMelasCandidateComponent', () => {
  let component: ViewAllRozgarMelasCandidateComponent;
  let fixture: ComponentFixture<ViewAllRozgarMelasCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllRozgarMelasCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllRozgarMelasCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
