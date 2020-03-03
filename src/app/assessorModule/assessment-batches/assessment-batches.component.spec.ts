import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentBatchesComponent } from './assessment-batches.component';

describe('AssessmentBatchesComponent', () => {
  let component: AssessmentBatchesComponent;
  let fixture: ComponentFixture<AssessmentBatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentBatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
