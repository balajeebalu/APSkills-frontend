import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBatchesComponent } from './search-batches.component';

describe('SearchBatchesComponent', () => {
  let component: SearchBatchesComponent;
  let fixture: ComponentFixture<SearchBatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
