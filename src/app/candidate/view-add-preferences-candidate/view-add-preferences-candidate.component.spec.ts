import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddPreferencesCandidateComponent } from './view-add-preferences-candidate.component';

describe('ViewAddPreferencesCandidateComponent', () => {
  let component: ViewAddPreferencesCandidateComponent;
  let fixture: ComponentFixture<ViewAddPreferencesCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAddPreferencesCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAddPreferencesCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
