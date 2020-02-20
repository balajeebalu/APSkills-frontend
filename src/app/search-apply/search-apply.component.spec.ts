import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchApplyComponent } from './search-apply.component';

describe('SearchApplyComponent', () => {
  let component: SearchApplyComponent;
  let fixture: ComponentFixture<SearchApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
