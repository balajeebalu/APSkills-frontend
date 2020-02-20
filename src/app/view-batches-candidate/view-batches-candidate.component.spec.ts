import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBatchesCandidateComponent } from './view-batches-candidate.component';

describe('ViewBatchesCandidateComponent', () => {
  let component: ViewBatchesCandidateComponent;
  let fixture: ComponentFixture<ViewBatchesCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBatchesCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBatchesCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
