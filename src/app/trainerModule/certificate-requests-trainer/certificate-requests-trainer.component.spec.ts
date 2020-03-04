import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateRequestsTrainerComponent } from './certificate-requests-trainer.component';

describe('CertificateRequestsTrainerComponent', () => {
  let component: CertificateRequestsTrainerComponent;
  let fixture: ComponentFixture<CertificateRequestsTrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateRequestsTrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateRequestsTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
