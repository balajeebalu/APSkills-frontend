import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessorViewBatchesComponent } from './assessor-view-batches.component';

describe('AssessorViewBatchesComponent', () => {
  let component: AssessorViewBatchesComponent;
  let fixture: ComponentFixture<AssessorViewBatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessorViewBatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessorViewBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
