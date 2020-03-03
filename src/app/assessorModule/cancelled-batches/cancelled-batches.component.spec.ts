import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledBatchesComponent } from './cancelled-batches.component';

describe('CancelledBatchesComponent', () => {
  let component: CancelledBatchesComponent;
  let fixture: ComponentFixture<CancelledBatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelledBatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelledBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
