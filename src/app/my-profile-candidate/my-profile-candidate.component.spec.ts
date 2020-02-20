import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileCandidateComponent } from './my-profile-candidate.component';

describe('MyProfileCandidateComponent', () => {
  let component: MyProfileCandidateComponent;
  let fixture: ComponentFixture<MyProfileCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
