import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBatchesTrainerComponent } from './search-batches-trainer.component';

describe('SearchBatchesTrainerComponent', () => {
  let component: SearchBatchesTrainerComponent;
  let fixture: ComponentFixture<SearchBatchesTrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBatchesTrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBatchesTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
