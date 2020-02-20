import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyBatchesCandidateComponent } from './view-my-batches-candidate.component';

describe('ViewMyBatchesCandidateComponent', () => {
  let component: ViewMyBatchesCandidateComponent;
  let fixture: ComponentFixture<ViewMyBatchesCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMyBatchesCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMyBatchesCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
