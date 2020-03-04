import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileTrainerComponent } from './my-profile-trainer.component';

describe('MyProfileTrainerComponent', () => {
  let component: MyProfileTrainerComponent;
  let fixture: ComponentFixture<MyProfileTrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileTrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
