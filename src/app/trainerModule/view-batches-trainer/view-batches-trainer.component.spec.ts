import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBatchesTrainerComponent } from './view-batches-trainer.component';

describe('ViewBatchesTrainerComponent', () => {
  let component: ViewBatchesTrainerComponent;
  let fixture: ComponentFixture<ViewBatchesTrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBatchesTrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBatchesTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
